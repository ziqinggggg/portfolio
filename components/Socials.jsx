// import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn/>,
    url: "https://www.linkedin.com/in/zi-qing-lai-a754b1253/",
  },
  {
    name: "GitHub",
    icon: <FaGithub/>,
    url: "bla",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp/>,
    url: "https://wa.me/6588260113",
  },
];

const Socials = ({containerStyles, iconStyles}) => {
    return (
      <div className={containerStyles}>
        {socials.map((social, index) => {
          return (
            <TooltipProvider delayDuration={10}>
              <Tooltip>
                <TooltipTrigger>
                  <Link key={index} href={social.url} className={iconStyles}>
                      {social.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{social.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    );
}

export default Socials;