import { TechStackContent } from "~/data";

interface TechStackProps {
    content: TechStackContent;
}

export default function TechStack({ content }: TechStackProps) {
    return (
        <div className="space-y-8">
            {content.title && (
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    {content.title}
                </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.categories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-black/5 dark:border-white/5 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                    <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {category.name}:
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

