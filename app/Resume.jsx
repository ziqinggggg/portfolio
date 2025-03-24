"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiDart,
  SiDocker,
  SiFirebase,
  SiTensorflow,
  SiCisco,
  SiPython,
  SiC,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FiExternalLink } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const about = {
  title: "About Me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Lai Zi Qing",
    },
    {
      fieldName: "Phone",
      // fieldValue:
      // "(+65) 8826 0113 / (+60) 11 5403 0113",
      fieldValue: (
        <>
          {" "}
          <a href="https://wa.me/6588260113" className="hover:underline">
            (+65) 8826 0113
            <FiExternalLink className="ml-2 inline-block" />
          </a>
          {" / (+60) 11 5403 0113"}
        </>
      ),
    },
    {
      fieldName: "Email",
      fieldValue: (
        <a href="mailto:ziqing0914@gmail.com" className="hover:underline ">
          ziqing0914@gmail.com
          <FiExternalLink className="ml-2 inline-block" />
        </a>
      ),
    },
    {
      fieldName: "Nationality",
      fieldValue: "Malaysian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Mandarin, Malay",
    },
  ],
};

const experience = {
  title: "Internship Experience",
  description: "",
  items: [
    {
      company: "Seagate Singapore",
      position: "Engineering Intern",
      duration: "Jan 2023 - Jul 2023",
      description:
        "Conducted testing on storage devices, analyzed failures, validated bugs with functional teams, and leveraged automation to enhance manual testing efficiency.",
    },
  ],
};

const education = {
  title: "My Education",
  description: "",
  items: [
    {
      institution: (
        <>
          <CiLocationOn className="inline-block text-accent text-2xl mr-2" />
          Nanyang Technological University (NTU)
        </>
      ),
      degree: "Bachelor of Engineering (Electrical and Electronic Engineering)",
      specialization: "Specialization: Info-communication Engineering",
      duration: "2020 - 2024",
    },
    {
      institution: "LinkedIn Learning",
      degree: "Linux, TypeScript, Javascript",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      name: "React.Js",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS v4",
      icon: <SiTailwindcss />,
    },

    {
      name: "Flutter",
      icon: <SiFlutter />,
    },
    {
      name: "Dart",
      icon: <SiDart />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "Python",
      icon: <SiPython />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "TypeScript",
      icon: <SiJavascript />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "Docker",
      icon: <SiDocker />,
    },
    {
      name: "Cisco",
      icon: <SiCisco />,
    },
  ],
};

const Resume = () => {
  return (
    <div className="flex items-center justify-center py-12 md:py-0 px-4">
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] md:max-w-[280px] lg:max-w-[380px] mx-auto md:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* About Me */}
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-[30px] md:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="max-w-[680px] text-primary/60 mx-auto md:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6  mx-auto lg:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center md:justify-start gap-4"
                      >
                        <span className="text-accent">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[680px] text-primary/60 mx-auto md:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="px-4 gap-[30px] grid grid-cols-1 xl:grid-cols-1">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col gap-1 bg-secondary/80 p-4 rounded-xl py-6 px-10 justify-center items-center md:items-start hover:-translate-y-1"
                        >
                          <p className="text-accent">{item.duration}</p>
                          <h3 className="text-xl font-semibold">
                            {item.company}
                          </h3>
                          <p>{item.position}</p>
                          <div className="border-b border-primary/80 w-full my-2"></div>
                          <p className="text-primary/80">{item.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[680px] text-primary/60 mx-auto md:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="px-4  gap-[30px] grid grid-cols-1 xl:grid-cols-1">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col gap-1 bg-secondary/80 p-4 rounded-xl py-6 px-10 justify-center items-center md:items-start hover:-translate-y-1"
                        >
                          <p className="text-accent">{item.duration}</p>
                          <h3 className="text-xl font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-primary/90">
                            {item.specialization}
                          </p>
                          <p className="text-primary/80">{item.institution}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[680px] text-primary/60 mx-auto md:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li
                          key={index}
                          // className="flex flex-col gap-1 bg-secondary/80 p-4 rounded-xl py-6 px-10 justify-center items-center md:items-start "
                        >
                          {/* <TooltipProvider delayDuration={10}>
                            <Tooltip>
                              <TooltipTrigger className="cursor-pointer w-full h-[150px] bg-secondary/80 p-4 rounded-xl flex justify-center items-center group hover:-translate-y-1">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 flex flex-col items-center">
                                  <div>
                                  {skill.icon}
                                  </div>
                                  <div className="text-base">{skill.name}</div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider> */}
                          <div className="cursor-pointer w-full h-[150px] bg-secondary/80 p-4 rounded-xl flex justify-center items-center group hover:-translate-y-1">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 flex flex-col items-center gap-1">
                              <div>{skill.icon}</div>
                              <div className="text-base">{skill.name}</div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
