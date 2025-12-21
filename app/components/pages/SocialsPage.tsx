import { homeData } from "~/data";

export default function SocialsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Connect with me on these platforms:
        </p>
        
        {/* Social links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {homeData.socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-black/5 dark:border-white/5 hover:shadow-lg transition-all duration-300 flex items-center gap-4 group`}
              >
                <Icon className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-semibold">{link.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{link.url}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

