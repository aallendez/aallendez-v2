import { 
  DiPython, DiJava, DiJavascript1, 
  DiDjango, DiFirebase, DiPostgresql, DiMongodb, DiAws,
  DiLinux,
  DiCode, DiTerminal
} from 'react-icons/di';
import { SiFastapi, SiPytest, SiGrafana, SiPrometheus, SiLangchain, SiPytorch, SiPandas, SiScikitlearn, 
  SiApachespark, SiOpensourceinitiative, SiRabbitmq, SiNvidia, SiTypescript, SiTerraform, SiKubernetes
} from 'react-icons/si';
import { useState, useEffect } from 'react';
import { TbApi } from 'react-icons/tb';
import { GrGraphQl } from "react-icons/gr";
import { FaDocker, FaDatabase } from "react-icons/fa6";
import { FaExternalLinkAlt, FaShopify, FaSpotify, FaGithub, FaFileAlt, FaPlay, FaVideo } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { projects, projectTopics } from "~/data";
import { FiExternalLink } from "react-icons/fi";


export const GrpcIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const html = document.documentElement;
      setIsDark(html.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    checkDarkMode();

    // Watch for changes in dark mode
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Also listen to system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 128 128" {...props}>
      <path fill={isDark ? '#FFFFFF' : '#000000'} d="M8.838 38.03L0 46.935l8.938 8.837L12.4 52.27l-3.132.01l-5.391-5.351l5.352-5.393l3.128-.012l-3.52-3.496zm3.52 3.495l.716.711l.713-.716l-1.43.005zm.716.711l-4.033 4.065l8.098-.03l-4.065-4.035zm4.065 4.035l.601.598l-.613.621l11.416-.043l-.635-.63l.582-.587l-11.351.041zm11.351-.04l4.17-.016l-2.086-2.07l2.281-.008l2.696 2.675l-2.676 2.696l-2.248.008L33.131 52l5.183-5.223l-5.222-5.183l-4.602 4.636zm2.137 3.285l-.016-.016l-.015.016h.031zm-.016-.016l2.053-2.068l-4.121.015l2.068 2.053zm-13.484-2.01l-8.08.03l4.062 4.033l4.018-4.063zm-4.018 4.063l-.709.718l1.428-.005l-.719-.713zm102.381-7.71c-2.515 0-4.847.448-6.996 1.339c-2.149.89-4.01 2.125-5.586 3.7c-1.576 1.576-2.809 3.446-3.699 5.61c-.893 2.165-1.338 4.535-1.338 7.113c0 2.58.444 4.953 1.336 7.118c.89 2.164 2.125 4.033 3.701 5.609c1.576 1.576 3.437 2.81 5.586 3.7c2.15.89 4.48 1.337 6.996 1.337c1.4 0 2.729-.16 3.987-.476a16.477 16.477 0 0 0 3.51-1.315a13.433 13.433 0 0 0 2.89-1.98A13.111 13.111 0 0 0 128 73.162l-2.816-2.006c-.637.987-1.33 1.807-2.077 2.46a9.755 9.755 0 0 1-2.388 1.552c-.844.382-1.703.652-2.578.81a14.76 14.76 0 0 1-2.65.24c-2.166 0-4.108-.398-5.827-1.195c-1.72-.795-3.173-1.86-4.367-3.199c-1.193-1.336-2.11-2.887-2.746-4.654a16.278 16.278 0 0 1-.955-5.565c0-1.94.319-3.794.955-5.56c.637-1.767 1.553-3.32 2.746-4.656c1.194-1.337 2.648-2.404 4.367-3.2c1.72-.795 3.66-1.193 5.826-1.193c.89 0 1.782.128 2.674.383c.89.255 1.728.589 2.508 1.002c.78.414 1.471.89 2.076 1.431c.605.542 1.083 1.083 1.434 1.624l3.005-2.245c-1.495-1.91-3.293-3.276-5.394-4.105c-2.1-.827-4.202-1.24-6.303-1.24v-.002zm-71.525.86V78.51h3.437V62.8h5.73l9.263 15.71h4.203l-9.743-16.043c2.8-.254 4.944-1.186 6.424-2.793c1.48-1.607 2.219-3.59 2.219-5.945c0-3.024-.993-5.285-2.982-6.782c-1.99-1.496-4.705-2.244-8.143-2.244H43.965zm28.553 0V78.51h3.437V62.8h6.399c3.437 0 6.151-.757 8.14-2.269c1.99-1.51 2.985-3.778 2.985-6.802c0-3.024-.996-5.285-2.985-6.782c-1.99-1.496-4.703-2.244-8.14-2.244h-9.836zm-25.116 3.152h6.112c1.528 0 2.823.152 3.89.454c1.066.303 1.92.724 2.557 1.265c.636.542 1.097 1.17 1.383 1.887c.287.716.43 1.472.43 2.268c0 .828-.143 1.6-.43 2.316a4.621 4.621 0 0 1-1.383 1.861c-.637.525-1.49.948-2.557 1.266c-1.067.318-2.362.476-3.89.476h-6.112V47.855zm28.553 0h5.54c1.527 0 2.823.152 3.89.454c1.066.303 1.917.724 2.554 1.265c.636.542 1.098 1.17 1.385 1.887a6.05 6.05 0 0 1 .432 2.268c0 .828-.146 1.6-.432 2.316a4.623 4.623 0 0 1-1.385 1.861c-.637.525-1.488.948-2.554 1.266c-1.067.318-2.363.476-3.89.476h-5.54V47.855zM22.67 55.59c-1.655 0-3.177.296-4.56.885a10.66 10.66 0 0 0-3.583 2.459a11.658 11.658 0 0 0-2.363 3.675c-.573 1.401-.86 2.913-.86 4.537c0 1.623.304 3.136.909 4.536a10.872 10.872 0 0 0 2.48 3.605a11.6 11.6 0 0 0 3.702 2.363c1.416.573 2.937.86 4.56.86a11.49 11.49 0 0 0 4.633-.955c1.464-.636 2.704-1.72 3.723-3.246h.095v4.01c0 1.21-.15 2.346-.453 3.413a7.274 7.274 0 0 1-1.48 2.793c-.685.795-1.584 1.425-2.698 1.887c-1.115.46-2.466.692-4.058.692c-1.814 0-3.464-.375-4.944-1.122c-1.48-.748-2.68-1.742-3.603-2.984l-2.342 2.482c1.433 1.528 3.026 2.658 4.777 3.391c1.75.732 3.74 1.098 5.967 1.098c2.514 0 4.554-.38 6.114-1.145c1.56-.764 2.776-1.72 3.652-2.865a9.553 9.553 0 0 0 1.766-3.772c.303-1.37.455-2.659.455-3.869V56.162h-3.153v3.727h-.095c-.637-.86-1.32-1.568-2.053-2.125a10.46 10.46 0 0 0-2.22-1.315a10.06 10.06 0 0 0-2.245-.668a12.746 12.746 0 0 0-2.123-.19v-.001zm.38 2.865c1.306 0 2.484.232 3.534.693c1.05.461 1.942 1.082 2.674 1.862a7.968 7.968 0 0 1 1.672 2.72a9.51 9.51 0 0 1 .574 3.32c.03 1.306-.17 2.482-.6 3.532a7.61 7.61 0 0 1-1.838 2.7a8.665 8.665 0 0 1-2.744 1.741a8.718 8.718 0 0 1-3.271.622c-1.178 0-2.27-.232-3.272-.692a8.542 8.542 0 0 1-2.625-1.861a8.718 8.718 0 0 1-1.767-2.723a8.556 8.556 0 0 1-.645-3.318a8.59 8.59 0 0 1 .645-3.32a8.734 8.734 0 0 1 1.767-2.72a8.566 8.566 0 0 1 2.625-1.863a7.757 7.757 0 0 1 3.272-.693z"></path>
    </svg>
  );
};

export default function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  // Get all unique years from projects
  const allYears = Array.from(
    new Set(projects.map(p => p.date))
  ).sort((a, b) => b.localeCompare(a)); // Sort descending

  // Filter projects based on selected year and topic
  const filteredProjects = projects.filter(project => {
    const yearMatch = selectedYear === 'all' || project.date === selectedYear;
    const topicMatch = selectedTopic === 'all' || project.topic.includes(selectedTopic);
    return yearMatch && topicMatch;
  });

  // Map technologies to their icon components
  const getTechIcon = (tech: string) => {
    const iconMap: Record<string, any> = {
      // Programming
      'Python': DiPython,
      'C': DiCode,
      'Java': DiJava,
      'JavaScript': DiJavascript1,
      'TypeScript': SiTypescript,
      
      // Full-Stack
      'Firebase': DiFirebase,
      'Django': DiDjango,
      'Fast-API': SiFastapi,
      'SQL': DiPostgresql,
      'MongoDB': DiMongodb,
      'Pytest': SiPytest,
      'RabbitMQ': SiRabbitmq,
      
      // APIs
      'REST': TbApi,
      'graphQL': GrGraphQl,
      'gRPC': GrpcIcon,
      
      // Infra
      'Terraform': SiTerraform,
      'AWS': FaAws,
      'Azure': VscAzure,
      'Grafana': SiGrafana,
      'Prometheus': SiPrometheus,
      'Linux': DiLinux,
      'Docker': FaDocker,
      'K9s': SiKubernetes,
      
      // AI, ML & Big Data
      'Langchain / Langgraph': SiLangchain,
      'Langchain': SiLangchain,
      'ChromaDB': FaDatabase,
      'Pytorch': SiPytorch,
      'Apache Spark': SiApachespark,
      'Pandas': SiPandas,
      'Scikit-Learn': SiScikitlearn,
      
      // Other
      'CUDA': SiNvidia,
      'Slurm': DiTerminal,
      'MPI': DiCode,
      'OpenMP': SiOpensourceinitiative,
      'Shopify API': FaShopify,
      'Shopify': FaShopify,
      'Spotify API': FaSpotify,
      'Git': FaGithub,
      'Github': FaGithub,
      'Github Actions': FaGithub,
    };
    
    return iconMap[tech] || DiCode; // Fallback to generic code icon
  };

  const techStack = {
    programming: ['Python', 'C', 'Java', 'JavaScript', 'TypeScript'],
    fullStack: ['Firebase', 'Django', 'Fast-API', 'SQL', 'MongoDB', 'Pytest', 'RabbitMQ'],
    apis: ['REST', 'graphQL', 'gRPC'],
    infra: ['Terraform', 'AWS', 'Azure', 'Grafana', 'Prometheus', 'Linux', 'Docker', 'K9s'],
    aiMlBigData: ['Langchain / Langgraph', 'ChromaDB', 'Pytorch', 'Apache Spark', 'Pandas', 'Scikit-Learn'],
    other: ['CUDA', 'Slurm', 'MPI', 'OpenMP', 'Github Actions']
  };

  // Helper function to get icon for link type
  const getLinkIcon = (linkType: string) => {
    const iconMap: Record<string, any> = {
      'repo': FaGithub,
      'github': FaGithub,
      'paper': FaFileAlt,
      'article': FaFileAlt,
      'demo': FaVideo,
      'video': FaVideo,
      'play': FaVideo,
    };
    return iconMap[linkType.toLowerCase()] || FiExternalLink;
  };

  // Helper function to format link type label
  const formatLinkLabel = (linkType: string) => {
    const labelMap: Record<string, string> = {
      'repo': 'Code',
      'github': 'GitHub',
      'paper': 'Paper',
      'article': 'Article',
      'demo': 'Demo',
      'video': 'Video',
      'play': 'Play',
    };
    return labelMap[linkType.toLowerCase()] || linkType.charAt(0).toUpperCase() + linkType.slice(1);
  };

  // ProjectCard component
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const isActive = project.active;
    
    // Get all available links (support both old url and new urls format)
    const getProjectLinks = () => {
      const links: Array<{ type: string; url: string }> = [];
      
      // Support new urls format
      if (project.urls) {
        Object.entries(project.urls).forEach(([type, url]) => {
          if (url) {
            links.push({ type, url });
          }
        });
      }
      
      // Support old url format for backward compatibility
      if (project.url && !project.urls) {
        links.push({ type: 'link', url: project.url });
      }
      
      return links;
    };

    const projectLinks = getProjectLinks();
    
    const cardContent = (
      <>
        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {!isActive && (
            <div className="absolute top-2 right-2 px-2 py-1 bg-red-500/80 text-white text-xs rounded">
              Discontinued
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-4 space-y-3">
          {/* Title and Date */}
          <div className="flex items-start justify-between">
            <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out ${
              isActive ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : 'opacity-75'
            }`}>
              {project.title}
            </h3>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
            
            {/* Links */}
            {isActive && projectLinks.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {projectLinks.map((link) => {
                  const LinkIcon = getLinkIcon(link.type);
                  return (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200/50 dark:border-blue-800/50"
                    >
                      <LinkIcon className="w-3.5 h-3.5" />
                      <span className="text-xs">{formatLinkLabel(link.type)}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.stack.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-1 px-2 py-0.5 bg-white/70 dark:bg-gray-700/70 backdrop-blur rounded text-xs text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                >
                  {IconComponent && <IconComponent className="w-3 h-3" />}
                  <span className="text-[10px]">{tech}</span>
                </span>
              );
            })}
          </div>
        </div>
      </>
    );

    return (
      <div
        className={`block bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg border border-black/5 dark:border-white/5 overflow-hidden ${
          isActive ? 'group' : 'opacity-75 cursor-not-allowed'
        }`}
      >
        {cardContent}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Stack Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🛠️ Stack</h2>
        <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          As time has passed and I've tried new things, I've learned a lot of technologies and programming languages. Here are some of the ones I've used.
        </p>
        
        <div className="flex flex-wrap gap-4">
          {/* Programming */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2 ml-4">Programming:</span>
            {techStack.programming.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-full text-sm text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Full-Stack */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2 ml-4">Full-Stack:</span>
            {techStack.fullStack.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-full text-sm text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                >
                  <IconComponent className="w-4 h-4" />
                  {tech}
                </span>
              );
            })}
          </div>

          {/* APIs */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2 ml-4">APIs:</span>
            {techStack.apis.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-full text-sm text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                >
                  <IconComponent className="w-4 h-4" />
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Infra */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2 ml-4">Infra:</span>
            {techStack.infra.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-full text-sm text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                >
                  <IconComponent className="w-4 h-4" />
                  {tech}
                </span>
              );
            })}
          </div>

          {/* AI, ML & Big Data */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2 ml-4">AI, ML & Big Data:</span>
            {techStack.aiMlBigData.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-full text-sm text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                >
                  <IconComponent className="w-4 h-4" />
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Other things I've played with */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2 ml-4">Other:</span>
            {techStack.other.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-full text-sm text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                >
                  <IconComponent className="w-4 h-4" />
                  {tech}
                </span>
              );
            })}
          </div>
            </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-left">🗂️ Projects</h2>
          <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />

          {/* Filter Section */}
          <div className="flex items-start gap-6">
            {/* Year Filter */}
            <div className="flex flex-wrap items-center gap-2 p-4 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur rounded-lg border border-blue-200/50 dark:border-blue-800/50">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Year:</span>
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-black/5 dark:border-white/5'
                }`}
              >
                All
              </button>
              {allYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedYear === year
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-black/5 dark:border-white/5'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Topic Filter */}
            <div className="flex flex-wrap items-center gap-2 p-4 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur rounded-lg border border-blue-200/50 dark:border-blue-800/50">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Topic:</span>
              <button
                onClick={() => setSelectedTopic('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTopic === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-black/5 dark:border-white/5'
                }`}
              >
                All
              </button>
              {projectTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTopic === topic
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-black/5 dark:border-white/5'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
              No projects found matching the selected filter.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

