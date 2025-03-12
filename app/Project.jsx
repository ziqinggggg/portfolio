"use client";

import { motion } from 'framer-motion';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from 'next/link';
import Image from 'next/image';
import SliderButton from '@/components/SliderButton';

const projects = [
    {
        num: '01',
        title: 'Mobile Application',
        description: 'An Android application that allows user to capture graphical information from a form.',
        stack: [{name: 'Flutter'}, {name: 'FireBase'}],
        image: '/assets/formcapture/552shots_so.png',
        live: null,
        github: 'https://github.com/ziqinggggg/formcapture3.git',
    },
    {
        num: '02',
        title: 'Web Application',
        description: 'An online fashion retail web portal that allows customers to browse and purchase items online.',
        stack: [{name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name: 'PHP'}, {name: 'SQL'}],
        image: '/assets/work/thumb1.png',
        live: '',
        github: 'https://github.com/ziqinggggg/Fashion-Science',
    }
]


const Project = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.realIndex;
        setProject(projects[currentIndex]);
    }

  return (
    <div className="container justify-center mx-auto py-12 md:py-0 px-4">
      <div className="flex flex-col md:flex-row md:gap-[30px]">
        <div className="w-full md:max-w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
          <div className="flex flex-col gap-[30px] ">
            {/* project num */}
            <div className="text-8xl leading-none font-extrabold text-accent/90">
              {project.num}
            </div>
            {/* project title */}
            <div className="container flex flex-wrap flex-row gap-4">
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* button */}
              <div className="flex items-end gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={10}>
                      <Tooltip>
                        <TooltipTrigger className="cursor-pointer w-[30px] h-[30px] bg-transparent rounded-full flex justify-center items-center group">
                          <BsArrowUpRight className="text-primary text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>View Project</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={10}>
                    <Tooltip>
                      <TooltipTrigger className="cursor-pointer w-[30px] h-[30px] bg-transparent rounded-full flex justify-center items-center group">
                        <BsGithub className="text-primary text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
            {/* project description */}
            <p className="text-primary/80">{project.description}</p>
            {/* project stack */}
            <ul className="flex gap-2 w-full flex-wrap">
              {project.stack.map((stack, index) => (
                <li
                  key={index}
                  className="text-l text-accent bg-transparent 
                  border border-accent rounded-full px-4 py-0"
                >
                  {stack.name}
                  {/* {index !== project.stack.length - 1 && ','} */}
                </li>
              ))}
            </ul>
            {/* border */}
            <div className="border-b border-primary/80"></div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="md:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            loop={true}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/* Image */}
                  <div className="w-full h-full">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover"
                      alt={project.title}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SliderButton
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between"
              buttonStyles="bg-primary/30 hover:bg-accent/80 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
            /> */}
            <SliderButton
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between md:w-max md:justify-none"
              buttonStyles="bg-primary/30 hover:bg-accent/80 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Project;
