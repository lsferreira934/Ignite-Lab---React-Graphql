import classNames from "classnames";
import { List, X } from "phosphor-react";
import { useState } from "react";
import { Logo } from "./Logo";

interface SidebarProps {
  handleShowSidebar: () => void;
  switchIcon: boolean;
}

export function Header(props: SidebarProps) {
  return (
    <header className="w-full p-5 flex items-center justify-between md:justify-center  bg-gray-700 border-b border-gray-600 transform transition-all duration-150 ease-out">
      <Logo />
      {props.switchIcon ? (
        <List
          size={34}
          className="block cursor-pointer md:hidden"
          onClick={props.handleShowSidebar}
        />
      ) : (
        <X
          size={34}
          className="block cursor-pointer md:hidden"
          onClick={props.handleShowSidebar}
        />
      )}
    </header>
  );
}
