import CommunityFeatures from "@/components/sections/community-features";
import EducationalCoverage from "@/components/sections/educational-coverage";
import Footer from "@/components/sections/footer";
import JoinUs from "@/components/sections/join-us";
import PlatformBenefits from "@/components/sections/platform-benefits";
import PlatformFeatures from "@/components/sections/platform-features";

export default function Home() {
  return (
    <div>
      <PlatformFeatures />
      <EducationalCoverage />
      <PlatformBenefits />
      <CommunityFeatures />
      <JoinUs />
      <Footer />
    </div>
  );
}
