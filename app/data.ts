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
    url?: string; // Deprecated: use urls instead, kept for backward compatibility
    urls?: Record<string, string>; // e.g., { repo: '...', paper: '...', demo: '...', video: '...' }
    active: boolean;
    topic: string[];
}

export interface MenuItem {
    key: string;
    label: string;
}

export interface PageIntroduction {
    text: string;
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
    { key: 'projects', label: '🛠️ Projects' },
    { key: 'about', label: '🎸 About me' },
    // { key: 'contact', label: 'Contact' },
    { key: 'interests', label: '🤷‍♂️ Random' },
    // { key: 'socials', label: 'Socials' },
];

export const pageIntroductions: Record<string, PageIntroduction> = {
    'about': {
        text: 'Be curious, not judgmental. - Ted Lasso'
    },
    'projects': {
        text: 'It all started with legos 🏗️ ... I\'ve always loved to build things. These are some of the things I\'ve worked on since I discovered software engineering.'
    },
    'contact': {
        text: 'Get in touch if you\'d like to collaborate, discuss opportunities, or just say hello!'
    },
    'socials': {
        text: 'Connect with me on these platforms to stay updated on my latest work and thoughts.'
    },
    'interests': {
        text: 'In this page you can find things I\'m passionate about, what inspires me, and what keeps me curious.'
    },
};

export const projectTopics: string[] = ['AI / ML', 'Full-Stack', 'HPC', 'DevOps / Infra'];

export const projects: Project[] = [
    {
        title: 'Zeffo AI',
        date: '2025',
        image: '/app/assets/zeffo.png',
        description: 'Multi-cloud, AI-powered ticket resolution platform to keep company docs up to date and improve based metrics and A/B experiment tracking.',
        stack: ['TypeScript', 'Firebase', 'Python', 'Langchain / Langgraph', 'SQL', 'ChromaDB', 'Fast-API', 'Docker', 'Terraform', 'AWS', 'Azure', 'Grafana', 'Prometheus'],
        urls: {
            repo: 'https://github.com/aallendez/zeffo-ai',
            article: 'https://medium.com/@jdominguez.ieu2023/building-zeffo-how-we-engineered-an-ai-powered-ticket-resolution-platform-a22c10fe255b',
            demo: 'https://youtu.be/oP243hvbMos',
        },
        active: true,
        topic: ['AI / ML', 'Full-Stack', 'DevOps / Infra'],
    },
    {
        title: 'GPU Monte Carlo Simulations',
        date: '2025',
        image: '/app/assets/montecarlo.png',
        description: 'Hybrid C/CUDA Monte Carlo engine for systemic crash probability estimation across correlated EU equity indices.',
        stack: ['C', 'CUDA', 'MPI', 'OpenMP', 'Slurm', 'Linux'],
        urls: {
            repo: 'https://github.com/javidsegura/gpu-montecarlo-risk',
        },
        active: true,
        topic: ['HPC', 'AI / ML'],
    },
    {
        title: 'Holonote',
        date: '2025',
        image: '/app/assets/holonote.png',
        description: 'Production ready note-taking and organization platform. Whoop but for wellbeing.',
        stack: ['TypeScript', 'Firebase', 'Fast-API', 'SQL', 'Docker', 'Terraform', 'AWS', 'Grafana', 'Prometheus'],
        url: 'https://github.com/aallendez/holonote',
        active: true,
        topic: ['Full-Stack', 'DevOps / Infra'],
    },
    {
        title: 'Mantis Malware Classifier',
        date: '2025',
        image: '/app/assets/ico.png',
        description: 'Enterprise ML framework for tabular classification with automated hyperparameter tuning, LIME interpretability, and CI/CD.',
        stack: ['Python', 'Pytorch', 'Pandas', 'Scikit-Learn', 'Docker'],
        urls: {
            repo: 'https://github.com/aallendez/mantis-classifier',
            paper: 'https://drive.google.com/file/d/102RXKY8GOQHDGrLsAnj3H2rpR4Bow-xU/view?usp=drive_link',
        },
        active: true,
        topic: ['AI / ML'],
    },
    {
        title: 'Spoticircle',
        date: '2025',
        image: '/app/assets/spoticircle.png',
        description: 'Spotifcircle transforms spotify data into constelations. Private due to API limitations.',
        stack: ['TypeScript', 'Spotify API'],
        url: 'https://spoticircle.xyz',
        active: true,
        topic: ['Full-Stack'],
    },
    {
        title: 'Stonks App',
        date: '2024',
        image: '/app/assets/stonks.png',
        description: 'Financial tracker',
        stack: ['Python', 'Fast-API', 'SQL', 'Docker', 'Azure'],
        urls: {
            video: 'https://www.loom.com/share/6890bb6f4f3a486891700ad43c832a97?sid=d1c9a8be-22ce-44f3-83c0-88e186fb1a58',
        },
        active: true,
        topic: ['Full-Stack', 'DevOps / Infra'],
    },
    {
        title: 'Coffee Subscription Flow',
        date: '2024',
        image: '/app/assets/crickleCreek.png',
        description: 'Coffee subscription flow for a coffee shop. +$1k in sales in first months.',
        stack: ['TypeScript', 'graphQL', 'Shopify'],
        url: 'https://www.cricklecreekcoffee.com/pages/subscription',
        active: true,
        topic: ['Full-Stack'],
    },
    {
        title: 'ML Model',
        date: '2024',
        image: '/app/assets/euro2024.jpeg',
        description: 'The day before the Euro 2024 final, I made a model to predict the outcome of the game between Spain and England based on tournament performance.',
        stack: ['Python', 'Pandas', 'Scikit-Learn'],
        urls: {
            repo: 'https://github.com/aallendez/euro-final-ml-prediction',
        },
        active: true,
        topic: ['AI / ML'],
    },
    {
        title: 'LaRocket Support Chatbot',
        date: '2024',
        image: '/app/assets/chatbot_larocket.png',
        description: 'AI chatbot application for customer support.',
        stack: ['JavaScript', 'Python', 'Langchain / Langgraph', 'MongoDB'],
        url: 'https://github.com/aallendez/larocket-chatbot',
        active: false,
        topic: ['AI / ML', 'Full-Stack'],
    },
];