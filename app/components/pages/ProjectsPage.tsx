import { projectPage } from "~/data";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">{projectPage.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          {projectPage.description}
        </p>
        
        {/* Example grid layout - customize as needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-black/5 dark:border-white/5 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Project description goes here. Customize this layout as needed.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

