import { useState, useEffect } from "react";
import { ProjectDetail } from "~/data";
import { X, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    project: ProjectDetail;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle ESC key and body scroll lock
    useEffect(() => {
        if (!isModalOpen) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        // Lock body scroll when modal is open
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isModalOpen]);

    return (
        <>
            <div
                onClick={() => setIsModalOpen(true)}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
                <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!project.active && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Discontinued
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {project.title}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                            {project.date}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {project.description}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                            {project.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="relative">
                            <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                {!project.active && (
                                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                        Discontinued
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-4 sm:p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {project.date}
                                    </p>
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                        aria-label="Open project link"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {project.detailedInfo && (
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Details
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {project.detailedInfo}
                                    </p>
                                </div>
                            )}

                            {project.tags && project.tags.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

