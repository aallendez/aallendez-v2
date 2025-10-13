import type { Route } from "./+types/home";
import Home from "~/components/Home";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Footer } from "~/components/Footer";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Juan" },
    { name: "description", content: "Hi, I'm Juan." },
  ];
};

export default function HomePage() {
  return (
    <>
      <ThemeToggle />
      <Home />
      <Footer />
    </>
  );
}
