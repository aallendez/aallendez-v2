import type { Route } from "./+types/home";
import Home from "~/components/Home";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Footer } from "~/components/Footer";
import { useState, useEffect } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Juan" },
    { name: "description", content: "Hi, I'm Juan." },
  ];
};

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default function HomePage() {
  return (
    <>
      {/* <ThemeToggle /> */}
      {/* <MouseGlow /> */}
      <Home />
    </>
  );
}
