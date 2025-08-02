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

export const homeData: HomeData = {
  name: "Juan Alonso Allende",
  bio: "Software & Product Engineer",
  profilePicture: "/app/assets/pfp.png",
  location: "Madrid, Spain",
  status: "",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: Linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/your-handle",
      icon: Twitter,
      color: "hover:text-black dark:hover:text-white"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/your-handle",
      icon: Instagram,
      color: "hover:text-pink-600 dark:hover:text-pink-400"
    }
  ]
}; 