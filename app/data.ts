import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";


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
    title: string;
    date: string;
    image: string;
    description: string;
    stack: string[];
    url: string;
    active: boolean;
}

export interface MenuItem {
    key: string;
    label: string;
}

export const homeData: HomeData = {
  name: "Juan Alonso-Allende",
  bio: "Software & Product Engineer",
  profilePicture: "/app/assets/juan-2.png",
  location: "Madrid, Spain",
  status: "",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aallendez",
      icon: FaLinkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/aallendez",
      icon: FaGithub,
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "X",
      url: "https://x.com/aallendezz",
      icon: FaTwitter,
      color: "hover:text-black dark:hover:text-white"
    },
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com/juan_aaz",
    //   icon: Instagram,
    //   color: "hover:text-pink-600 dark:hover:text-pink-400"
    // }
  ]
}; 

export const projectPage: ProjectPage = {
    title: "Projects",
    description: "A collection of my projects and work"
};

export const menuItems: MenuItem[] = [
    { key: 'about', label: 'About me' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact' },
    { key: 'socials', label: 'Socials' },
];

export const projects: Project[] = [
    {
        title: 'Holonote',
        date: '2025',
        image: '/app/assets/holonote.png',
        description: 'Production ready note-taking and organization platform. Whoop but for wellbeing.',
        stack: ['TypeScript', 'Firebase', 'Fast-API', 'SQL', 'Docker', 'Terraform', 'AWS', 'Grafana', 'Prometheus'],
        url: 'https://github.com/aallendez/holonote',
        active: true,
    },
    {
        title: 'Zeffo AI',
        date: '2025',
        image: '/app/assets/zeffo.png',
        description: 'AI-powered application leveraging machine learning for intelligent solutions.',
        stack: ['TypeScript', 'Firebase', 'Python', 'Langchain / Langgraph', 'ChromaDB', 'Fast-API', 'Docker', 'Terraform', 'AWS', 'Azure', 'Grafana', 'Prometheus'],
        url: 'https://github.com/aallendez/zeffo-ai',
        active: true,
    },
    {
        title: 'GPU-Accelerated Monte Carlo for Systemic Risk',
        date: '2025',
        image: '/app/assets/ico.png',
        description: 'Hybrid C++/CUDA Monte Carlo engine for systemic crash probability estimation across correlated EU equity indices.',
        stack: ['C', 'CUDA', 'MPI', 'OpenMP', 'Linux'],
        url: 'https://github.com/javidsegura/gpu-montecarlo-risk',
        active: true,
    },
    {
        title: 'Mantis Malware Classifier',
        date: '2025',
        image: '/app/assets/ico.png',
        description: 'Enterprise ML framework for tabular classification with automated hyperparameter tuning, LIME interpretability, and CI/CD.',
        stack: ['Python', 'Pytorch', 'Pandas', 'Scikit-Learn', 'Docker'],
        url: 'https://github.com/aallendez/mantis-classifier',
        active: true,
    },
    {
        title: 'Spoticircle',
        date: '2025',
        image: '/app/assets/spoticircle.png',
        description: 'Spotifcircle transforms spotify data into constelations. Private due to API limitations.',
        stack: ['TypeScript', 'Spotify API'],
        url: 'https://spoticircle.xyz',
        active: true,
    },
    {
        title: 'Stonks App',
        date: '2024',
        image: '/app/assets/stonks.png',
        description: 'Financial tracker',
        stack: ['Python', 'Fast-API', 'SQL', 'Docker', 'Azure'],
        url: 'https://github.com/aallendez/stonks-app',
        active: true,
    },
    {
        title: 'Coffee Subscription Flow',
        date: '2024',
        image: '/app/assets/crickleCreek.png',
        description: 'Coffee subscription flow for a coffee shop. +$1k in sales in first months.',
        stack: ['TypeScript', 'graphQL', 'Shopify'],
        url: 'https://www.cricklecreekcoffee.com/pages/subscription',
        active: true,
    },
    {
        title: 'ML Model',
        date: '2024',
        image: '/app/assets/euro2024.jpeg',
        description: 'The day before the Euro 2024 final, I made a model to predict the outcome of the game between Spain and England based on tournament performance.',
        stack: ['Python', 'Pandas', 'Scikit-Learn'],
        url: 'https://github.com/aallendez/ml-model',
        active: true,
    },
    {
        title: 'LaRocket Support Chatbot',
        date: '2024',
        image: '/app/assets/chatbot_larocket.png',
        description: 'AI chatbot application for customer support (discontinued).',
        stack: ['JavaScript', 'Python', 'Langchain / Langgraph', 'Fast-API', 'MongoDB'],
        url: 'https://github.com/aallendez/larocket-chatbot',
        active: false,
    },
];