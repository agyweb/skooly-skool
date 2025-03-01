import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden h-[5000px]">
      <ScrollProgress className="top-20" />
      <Header />
      <Hero />
    </div>
  );
}
