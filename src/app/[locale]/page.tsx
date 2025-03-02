import CommunityFeatures from "@/components/sections/community-features";
import EducationalCoverage from "@/components/sections/educational-coverage";
import Footer from "@/components/sections/footer";
import JoinUs from "@/components/sections/join-us";
import PlatformBenefits from "@/components/sections/platform-benefits";
import PlatformFeatures from "@/components/sections/platform-features";
import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Hero } from "@/components/sections/hero";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <SmoothScroll />
      <ScrollProgress className="top-20" />
      <Header />
      <Hero />
      <PlatformFeatures />
      <EducationalCoverage />
      <PlatformBenefits />
      <CommunityFeatures />
      <JoinUs />
      <Footer />
    </div>
  );
}
