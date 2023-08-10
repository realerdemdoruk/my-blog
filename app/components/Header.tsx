"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
  };

  useEffect(() => {
    if (document.body.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header className="flex items-center justify-between w-full max-w-3xl px-4 py-8 mx-auto">
      <div />
      <nav className="flex items-center  space-x-4">
        <Link
          href="/"
          className="font-medium 
          text-xl
          hover:transform 
          hover:rotate-45
        dark:text-white"
        >
          Blog
        </Link>
        <button
          className="font-medium 
          text-xl
          hover:transform 
          hover:rotate-45"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
