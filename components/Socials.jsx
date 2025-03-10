// import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn/>,
    url: "https://www.linkedin.com/in/zi-qing-lai/",
    
  },
  {
    icon: <FaGithub/>,
    url: "bla",
  },
];

const Socials = ({containerStyles, iconStyles}) => {
    return (
      <div className={containerStyles}>
        {socials.map((social, index) => {
          return (
            <Link key={index} href={social.url} className={iconStyles}>
                {social.icon}
            </Link>
          );
        })}
      </div>
    );
}

export default Socials;