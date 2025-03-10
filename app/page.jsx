// export default function Home() {
//   return (
//     <main>
//       {/* Whereas disregard and contempt for human rights have */}
//       <section id="home" className="pt-32 ">
//         Home Section
//       </section>
//       <section id="resume" className="pt-32 h-screen">
//         Resume Section
//       </section>
//       <section id="projects" className="pt-32 h-screen">
//         Projects Section{" "}
//       </section>
//       <section id="contact" className="pt-32 h-screen">
//         Contact Section
//       </section>
//     </main>
//   );
// }


import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Resume from "./Resume";


const Home = () => {
  return (
    <main>
      <section id="home" className="pt-32 min-h-screen ">
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center justify-between md:flex-row md:pt-8 md:pb-24">
            <div className="text-center md:text-left order-2 md:order-none">
              <h1 className="h1 mb-6">
                Hello, I'm <br />
                <span className="text-accent">Lai Zi Qing</span>
              </h1>
              <p className="text-2xl text-primary/90">Full Stack Developer</p>
              <p className="max-w-[500px] mb-9 text-primary/80">
                I'm a frest graduate from NTU with a degree in Electrical and
                Electronic Engineering. I have a passion for software
                development and I'm always looking for new challenges to improve
                my skills.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center duration-500"
                >
                  <span className="mr-2">Download Resume</span>
                  <FiDownload />
                </Button>
                <div className="mb-8 md:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-secondary hover:transition-all duration-500"
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
      <section id="resume" className="pt-32 min-h-screen">
        <div className="container mx-auto"><Resume/></div>
      </section>
      <section id="projects" className="pt-32 min-h-screen">
        <div className="container mx-auto">Project Section</div>
      </section>
      <section id="contact" className="pt-32 min-h-screen">
        <div className="container mx-auto">Contact Section</div>
      </section>
    </main>
  );
}

export default Home;