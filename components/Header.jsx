import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow-md py-8 xl:py-8 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">-</span>LZQ
            <span className="text-accent">-</span>
          </h1>
        </Link>

        {/* desktop nav n hire me*/}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
    // <div className="h-20"></div>
    // </>
  );
};

export default Header;
