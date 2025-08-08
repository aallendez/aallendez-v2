import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: any;
  color: string;
}

export interface HomeData {
  name: string;
  bio: string;
  profilePicture: string;
  location: string;
  status: string;
  socialLinks: SocialLink[];
}

export interface ProjectPage {
    title: string;
    description: string;
}


export interface Project {
    projectName: string;
    date: string;
    image: string;
    tags: string;
    link: string;
    active: boolean;
}

export const homeData: HomeData = {
  name: "Juan Alonso Allende",
  bio: "Software & Product Engineer",
  profilePicture: "/app/assets/pfp.png",
  location: "Madrid, Spain",
  status: "",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aallendez",
      icon: Linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/aallendez",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "X",
      url: "https://x.com/aallendezz",
      icon: Twitter,
      color: "hover:text-black dark:hover:text-white"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/juan_aaz",
      icon: Instagram,
      color: "hover:text-pink-600 dark:hover:text-pink-400"
    }
  ]
}; 

export const projectPage: ProjectPage = {
    title: "Projects",
    description: "A collection of my projects and work"
};