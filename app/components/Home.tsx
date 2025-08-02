import { homeData } from "~/data";
import {Tooltip} from "@heroui/tooltip";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
            {/* Profile Picture */}
            <div className="mb-4">
            <img
                src={homeData.profilePicture}
                alt="Profile Picture"
                className="w-48 h-48 rounded-full mx-auto shadow-lg object-cover"
            />
            </div>

            {/* Name & Bio */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {homeData.name}
                </h1>
                <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {homeData.bio}
                </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
            {homeData.socialLinks.map((link) => (
                <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 ${link.color}`}
                aria-label={link.name}
                >
                <link.icon className="w-6 h-6" />
                </a>
            ))}
            </div>

            {/* Orbiting Links */}
            <Tooltip className="bg-white" content="I am a tooltip">
                <p>Hola</p>
            </Tooltip>
        
        </div>
    </div>
  );
} 