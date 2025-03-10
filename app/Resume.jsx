"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFlutter, SiDocker } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

const about = {
  title: "About Me",
  description:
    "...........................",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Lai Zi Qing",
    },
    {
        fieldName: "Phone",
        fieldValue: "(+65) ",
    },
    {
        fieldName: "Email",
        fieldValue: "@gmail.com",
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
    icon: 'assets/resume/badge.svg',
    title: 'Job Experience',
    items:[{
        company:'Seagate Singapore',
        position: 'Engineering Intern',
        duration: 'Jan 2023 - Jul 2023',
        description: '...........................',
    }]
};

const education = {
  icon: "assets/resume/cap.svg",
  title: "My Education",
  description: "...........................",
  items: [
    {
      institution: "Nanyang Technological University (NTU)",
      degree: "Bachelor of Engineering (Electrical and Electronic Engineering)",
      duration: "Aug 2020 - Jul 2024",
    },
    {
      institution: "Online Courses",
      degree: "Linux, TypeScript, Javascript",
      duration: "2023",
    },
  ],
};

const skills = {
    title: 'My Skills',
    description: '...........................',
    skillList: [
        {
            name: 'HTML5',
            icon: <FaHtml5 />,
        },
        {
            name: 'CSS3',
            icon: <FaCss3 />,
        },
        {
            name: 'JavaScript',
            icon: <FaJs />,
        },
        {
            name: 'React.Js',
            icon: <FaReact />,
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss />,
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript />,
        },
        {
            name: 'Flutter',
            icon: <SiFlutter />,
        },
        {
            name: 'Docker',
            icon: <SiDocker />,
        },
    ],
};

const Resume = () => {
  return (
    // <div>lohl</div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        // transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 md:py-0 px-4"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="max-w-[680px] text-primary/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="text-left">
                  {about.info.map((info, index) => {
                    return (
                      <li key={index} className="flex">
                        <span>{info.fieldName}</span>
                        <span>{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[680px] text-primary/60 mx-0 lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="px-4 gap-[30px] grid grid-cols-1 lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col gap-1 bg-secondary/80 p-4 rounded-xl py-6 px-10 justify-center items-center md:items-start "
                        >
                          <p className="text-accent">{item.duration}</p>
                          <h3 className="text-xl font-semibold">
                            {item.company}
                          </h3>

                          <p className="text-primary/80">{item.position}</p>

                          <p className="text-primary/80">{item.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="px-4  gap-[30px] grid grid-cols-1 lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col gap-1 bg-secondary/80 p-4 rounded-xl py-6 px-10 justify-center items-center md:items-start "
                        >
                          <p className="text-accent">{item.duration}</p>
                          <h3 className="text-xl font-semibold">
                            {item.degree}
                          </h3>

                          <p className="text-primary/80">{item.institution}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div
                className="flex flex-col gap-[30px] text-center md:text-left"
              >
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[680px] text-primary/60 mx-auto md:mx-0">
                  {skills.description}
                </p>
                <ul className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        // className="flex flex-col gap-1 bg-secondary/80 p-4 rounded-xl py-6 px-10 justify-center items-center md:items-start "
                      >
                        {/* <p className="text-accent">{skill.name}</p>
                        <h3 className="text-xl font-semibold">
                        </h3> */}
                        <TooltipProvider delayDuration={10}>
                          <Tooltip>
                            <TooltipTrigger className="cursor-pointer w-full h-[150px] bg-secondary/80 p-4 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
