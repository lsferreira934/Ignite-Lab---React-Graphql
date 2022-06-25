import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full p-5 flex items-center justify-between md:justify-center  bg-gray-700 border-b border-gray-600">
      <Logo />
      <List size={34} className="block md:hidden"/>
    </header>
  );
}
