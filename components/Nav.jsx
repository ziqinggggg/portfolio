"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// const links = [
//   { name: "Home", path: "/" },
//   { name: "resume", path: "/resume" },
//   { name: "Projects", path: "/projects" },
//   { name: "Contact", path: "/contact" },
// ];
// const Nav = () => {
//     const pathname = usePathname();
//     return (
//       <nav className="flex gap-8">
//         {links.map((link, index) => (
//           <Link
//             key={index}
//             href={link.path}
//             className={`${
//               link.path === pathname && "text-accent border-b-2 border-accent"
//             } capitalize font-medium hover:text-accent transition-all`}
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>
//     );
//   };

const links = [
  { name: "Home", path: "home" },
  { name: "resume", path: "resume" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={`#${link.path}`}
          className={`${
            activeSection === link.path
              ? "text-accent border-accent"
              : "hover:text-accent border-transparent hover:border-accent"
          } capitalize font-medium border-b-2 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
