"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from "next/link";
import { useState, useEffect } from "react";


const links = [
    { name: "Home", path: "home" },
    { name: "resume", path: "resume" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];


const MobileNav = () => {
      const [activeSection, setActiveSection] = useState("home");
      const [isOpen, setIsOpen] = useState(false);
      
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.6 } // Adjust threshold for when a section is considered "active"
        );
    
        links.forEach((link) => {
          const section = document.getElementById(link.path);
          if (section) observer.observe(section);
        });
    
        return () => {
          links.forEach((link) => {
            const section = document.getElementById(link.path);
            if (section) observer.unobserve(section);
          });
        };
      }, []);

return (
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
      <CiMenuFries className="text-[32px] text-accent" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
      {/* logo */}
      <div className="mt-32 mb-32 text-center text-2xl">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-4xl font-semibold">LZQ</h1>
        </Link>
      </div>

      <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`#${link.path}`}
            onClick={() => setIsOpen(false)}
            className={`${
              activeSection === link.path
                ? "text-accent border-accent"
              : "hover:text-accent border-transparent hover:border-accent"
            } capitalize text-xl border-b-2 transition-all`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

};

export default MobileNav;