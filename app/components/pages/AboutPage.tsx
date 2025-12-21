import { homeData } from "~/data";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome! I'm {homeData.name}, a {homeData.bio} based in {homeData.location}.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          I'm passionate about building great software products and solving complex problems.
          This is a flexible page component that you can customize with any content you'd like.
        </p>
      </div>
    </div>
  );
}

