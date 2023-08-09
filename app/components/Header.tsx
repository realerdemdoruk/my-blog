import Link from "next/link";
import React, { FC } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className="flex items-center justify-between w-full max-w-3xl px-4 py-8 mx-auto">
      <div />
      <nav className="flex items-center  space-x-4">
        <Link
          href="/"
          className="font-medium 
          text-xl
          hover:transform 
          hover:rotate-45"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
