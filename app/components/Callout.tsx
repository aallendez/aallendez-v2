interface CalloutProps {
  content: string;
  italic?: boolean;
}

export default function Callout({ content, italic = false }: CalloutProps) {
  return (
    <div className="mt-4 p-4 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur rounded-lg border border-blue-200/50 dark:border-blue-800/50">
      <p className={`text-gray-700 dark:text-gray-300 leading-relaxed ${italic ? 'italic' : ''}`}>
        {content}
      </p>
    </div>
  );
}

