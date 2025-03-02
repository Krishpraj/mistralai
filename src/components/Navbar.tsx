"use client";
import React from "react";
import { NavItemProps } from "./types";

const NavItem: React.FC<NavItemProps> = ({ text, href = "#" }) => {
  return (
    <a
      href={href}
      className="grow shrink px-4 py-2 text-base leading-none text-amber-50 whitespace-nowrap"
    >
      {text}
    </a>
  );
};

const ActionButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button className="flex gap-5 px-3 py-2 bg-white/15 w-[125px] max-sm:hidden text-white hover:bg-white hover:text-black">
      {children}
    </button>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 flex flex-wrap gap-5 justify-between items-center self-stretch w-full z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
    } px-4 md:px-72 py-6 mx-auto max-sm:hidden`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/47337f9763f14e446b252ced6ed9d34c0bd8f12e05e378e66916bae11054ca53?placeholderIfAbsent=true"
        alt="Company Logo"
        className="object-contain shrink-0 w-10 aspect-[1.38]"
      />
      <div className="flex flex-wrap gap-4 max-md:max-w-full">
        <div className="flex flex-wrap flex-auto items-start self-start text-base leading-none text-amber-50 whitespace-nowrap min-h-[35px]">
          <NavItem text="Products" />
          <NavItem text="Solutions" />
          <NavItem text="Research" />
          <NavItem text="Resources" />
          <NavItem text="Company" />
        </div>
        <div className="flex flex-auto gap-4 items-start text-xs leading-6 bg-opacity-15 text-white min-h-9">
          <ActionButton>
            <span>Try the API</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/db402e0d037da11d57b23a1a6c0c577677d63f5ed608c4b287f79f66c392f47e?placeholderIfAbsent=true"
              alt="Arrow icon"
              className="object-contain shrink-0 my-auto w-4 aspect-square  "
            />
          </ActionButton>
          <ActionButton>
            <span>Talk to sale</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/db402e0d037da11d57b23a1a6c0c577677d63f5ed608c4b287f79f66c392f47e?placeholderIfAbsent=true"
              alt="Arrow icon"
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
          </ActionButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
