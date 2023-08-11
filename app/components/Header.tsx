"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const applyDarkMode = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
    document.body.classList.toggle("dark", darkMode);
    const html = document.querySelector("html");
    html?.classList.toggle("dark", darkMode);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    applyDarkMode(newDarkMode);

    // Kaydet
    localStorage.setItem("darkMode", newDarkMode ? "1" : "0");
  };

  useEffect(() => {
    // Kayıtlı dark modu durumunu yükle
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "1") {
      applyDarkMode(true);
    }
  }, []);

  return (
    <header className="flex items-center justify-between w-full max-w-3xl px-4 py-8 mx-auto">
      <div />
      <nav className="flex items-center space-x-4">
        <Link
          href="/"
          className="font-medium text-xl dark:text-white duration-1000 ease-in-out transition-all"
        >
          Blog
        </Link>
        <button className="font-medium text-xl " onClick={toggleDarkMode}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
