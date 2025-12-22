export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Feel free to reach out if you'd like to collaborate or just say hello!
        </p>
        
        {/* Example contact form or info - customize as needed */}
        <div className="space-y-6">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-black/5 dark:border-white/5">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a href="mailto:juan@aallende.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">juan@aallende.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

