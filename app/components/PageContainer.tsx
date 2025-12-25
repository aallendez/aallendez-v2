import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { animate } from 'animejs';
import { ArrowLeft } from "lucide-react";
import Callout from "./Callout";

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
      {/* Back Button - Top Left on Mobile, Center Left on Desktop */}
      {isActive && (
        <button
          onClick={onBack}
          className="fixed left-4 top-4 md:left-8 md:top-1/2 md:-translate-y-1/2 z-30 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-lg border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-900 dark:text-gray-100 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs md:text-sm font-medium text-gray-900 dark:text-gray-100">Back</span>
        </button>
      )}

      {/* Page Content */}
      <div className="max-w-6xl mx-auto h-full overflow-y-auto pb-24">
        {title && (
          <div className="pt-20 pb-8 px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
            <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
            {introduction && (
              <Callout content={introduction} italic={title === "About me"} />
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

