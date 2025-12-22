import { useState, useMemo } from "react";
import { ProjectListContent, ProjectDetail } from "~/data";
import ProjectCard from "./ProjectCard";
import { Filter } from "lucide-react";

interface ProjectListProps {
    content: ProjectListContent;
}

type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';
type FilterOption = 'all' | 'active' | 'discontinued';

export default function ProjectList({ content }: ProjectListProps) {
    const [sortBy, setSortBy] = useState<SortOption>('date-desc');
    const [filterBy, setFilterBy] = useState<FilterOption>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAndSortedProjects = useMemo(() => {
        let filtered: ProjectDetail[] = [...content.projects];

        // Filter by status
        if (filterBy === 'active') {
            filtered = filtered.filter(p => p.active !== false);
        } else if (filterBy === 'discontinued') {
            filtered = filtered.filter(p => p.active === false);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                p =>
                    p.title.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.tags?.some(tag => tag.toLowerCase().includes(query))
            );
        }

        // Sort projects
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'date-desc':
                    // Parse dates (assuming format like "Oct-Nov 2025" or "Nov 2025")
                    return parseDate(b.date) - parseDate(a.date);
                case 'date-asc':
                    return parseDate(a.date) - parseDate(b.date);
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [content.projects, sortBy, filterBy, searchQuery]);

    // Parse date string to timestamp for sorting
    function parseDate(dateStr: string): number {
        // Extract year from strings like "Oct-Nov 2025" or "Nov 2025"
        const yearMatch = dateStr.match(/(\d{4})/);
        const year = yearMatch ? parseInt(yearMatch[1]) : 0;
        
        // Extract month (use the first month if range)
        const monthMap: Record<string, number> = {
            'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6,
            'jul': 7, 'aug': 8, 'sep': 9, 'oct': 10, 'nov': 11, 'dec': 12
        };
        const monthMatch = dateStr.toLowerCase().match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/);
        const month = monthMatch ? monthMap[monthMatch[1]] : 0;
        
        return new Date(year, month - 1).getTime();
    }

    return (
        <div className="space-y-6">
            {content.title && (
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    {content.title}
                </h2>
            )}

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Search */}
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur border border-black/5 dark:border-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setFilterBy('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            filterBy === 'all'
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                        }`}
                    >
                        <Filter className="w-4 h-4 inline mr-1" />
                        All
                    </button>
                    <button
                        onClick={() => setFilterBy('active')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            filterBy === 'active'
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                        }`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setFilterBy('discontinued')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            filterBy === 'discontinued'
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                        }`}
                    >
                        Discontinued
                    </button>
                </div>

                {/* Sort Dropdown */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur border border-black/5 dark:border-white/5 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                    <option value="date-desc">Newest First</option>
                    <option value="date-asc">Oldest First</option>
                    <option value="title-asc">Title A-Z</option>
                    <option value="title-desc">Title Z-A</option>
                </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredAndSortedProjects.length} of {content.projects.length} projects
            </div>

            {/* Projects Grid */}
            {filteredAndSortedProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                    No projects found matching your criteria.
                </div>
            )}
        </div>
    );
}

