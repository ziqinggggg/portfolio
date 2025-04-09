import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Analytics } from "@vercel/analytics/react"

import Resume from "./Resume";
import Project from "./Project";

const Home = () => {
  return (
    <main>
      {/* Home */}
      <Analytics/>
      <section id="home" className="pt-32 min-h-screen ">
        <div className="container mx-auto h-full px-4">
          <div className="flex flex-col items-center justify-between md:flex-row md:pt-8 md:pb-24">
            <div className="text-center md:text-left order-2 md:order-none">
              <h1 className="h1 mb-6">
                Hello, I'm <br />
                <span className="text-accent">Lai Zi Qing</span>
              </h1>
              {/* <p className="text-2xl text-primary/90">Software Engineer</p> */}
              <p className="max-w-[560px] mb-9 text-primary/80">
                I'm a fresh graduate from NTU with a <b>Bachelor of Engineering (Electrical and Electronic Engineering)</b>, specializing in Info-communication Engineering. I enjoy tackling challenges and continuously expanding my expertise in technical fields.
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center duration-10 hover:-translate-y-1 w-full"
                >
                  <a
                    href="assets/LaiZiQing_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="mr-2">Download Resume</span>
                    <FiDownload />
                  </a>
                </Button>
                <div className="mb-8 md:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-13 h-13 border border-accent rounded-full flex justify-center items-center text-accent text-xl hover:bg-accent hover:text-secondary hover:transition-all duration-10 hover:-translate-y-1"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-none mb-8 md:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="min-h-[90vh]">
        <div className="container mx-auto">
          <Resume />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-[90vh]">
        <div className="container mx-auto">
          <Project />
        </div>
      </section>

      <footer className="mt-auto w-full text-center pb-2 ">
        <p className="text-sm text-primary/50">
          © {new Date().getFullYear()} Lai Zi Qing. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Home;
