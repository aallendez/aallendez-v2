import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { animate } from 'animejs';
import { ArrowLeft } from "lucide-react";

interface PageContainerProps {
  children: ReactNode;
  isActive: boolean;
  onBack: () => void;
  title?: string;
  introduction?: string;
}

export default function PageContainer({ children, isActive, onBack, title, introduction }: PageContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isActive) {
      // Slide in from right
      hasAnimatedRef.current = true;
      animate(containerRef.current, {
        x: ['100%', '0%'],
        ease: 'inOut(3)',
        duration: 1000,
      });
    } else if (hasAnimatedRef.current) {
      // Slide out to right when going back
      animate(containerRef.current, {
        x: ['0%', '100%'],
        ease: 'inOut(3)',
        duration: 1000,
      });
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${
        isActive ? 'z-20' : 'z-10'
      }`}
      style={{
        transform: isActive ? undefined : 'translateX(100%)',
      }}
    >
      {/* Back Button - Center Left */}
      {isActive && (
        <button
          onClick={onBack}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Back</span>
        </button>
      )}

      {/* Page Content */}
      <div className="max-w-6xl mx-auto h-full overflow-y-auto">
        {title && (
          <div className="pt-20 pb-8 px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
            <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-800" />
            {introduction && (
              <div className="mt-4 p-4 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{introduction}</p>
              </div>
            )}
          </div>
        )}
        <div className="px-8 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}

