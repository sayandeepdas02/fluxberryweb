import HeroV3 from "@/components/ui/HeroV3";
import TheProblem from "@/components/ui/TheProblem";
import WhyFluxBerry from "@/components/ui/WhyFluxBerry";
import Solutions from "@/components/ui/Solutions";
import EarlyResults from "@/components/ui/EarlyResults";
import Testimonials from "@/components/ui/SocialProof";
import WaitlistOffer from "@/components/ui/WaitlistOffer";

export default async function Home() {
  return (
    <main className="flex flex-col overflow-hidden px-0">
      <HeroV3 />
      <TheProblem />
      <WhyFluxBerry />
      <Solutions />
      <EarlyResults />
      <Testimonials />
      <WaitlistOffer />
    </main>
  );
}
