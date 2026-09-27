"use client";

import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "@/components/icons";
import { contact } from "@/lib/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="nav__mobile" ref={menuRef}>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <MenuIcon />
      </button>
      {isOpen ? (
        <div className="nav__mobile-panel" id="mobile-navigation">
          {links.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={contact.resume} download onClick={() => setIsOpen(false)}>
            Download resume
          </a>
        </div>
      ) : null}
    </div>
  );
}
