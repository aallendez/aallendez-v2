import type { Route } from "./+types/home";
import { Home } from "~/components/Home";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Footer } from "~/components/Footer";

export default function HomePage() {
  return (
    <>
      <ThemeToggle />
      <Home />
      <Footer />
    </>
  );
}
