"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from "next/link";
import { useState, useEffect } from "react";


const links = [
    { name: "Home", path: "home" },
    { name: "resume", path: "resume" },
    { name: "Projects", path: "projects" },
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
    <SheetTrigger
      className="flex justify-center items-center cursor-pointer "
      onClick={() => setIsOpen(true)}
    >
      <CiMenuFries className="text-[32px] text-accent hover:text-accent/80" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
      {/* logo */}
      <div className="mt-32 mb-32 text-center text-2xl">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-4xl font-semibold hover:text-primary/80 group">
            <span className="text-accent group-hover:text-accent/80">-</span>LZQ
            <span className="text-accent group-hover:text-accent/80">-</span>
          </h1>
        </Link>
      </div>
      {/* nav */}
      <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`#${link.path}`}
            onClick={() => setIsOpen(false)}
            className={`${
              activeSection === link.path
                ? "text-accent border-accent"
                : "hover:text-accent border-transparent hover:border-accent "
            } capitalize text-xl border-b-2 transition-all hover:-translate-y-1`}
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