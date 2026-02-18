import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import {
  FirstSection,
  SecondSection,
  ThirdSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <div className="flex min-h-screen  flex-col gap-3 items-center justify-center font-poppins">
      <Hero />
      <div className=" gap-3">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
    </div>
  );
}
