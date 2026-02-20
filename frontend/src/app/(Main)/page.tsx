import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import {
  FirstSection,
  SecondSection,
  ThirdSection,
} from "@/components/Sections";

//TODO: Extract all the footer to the parent layoout
//TODO: Add Loading Skeletons to the pages
//TODO: Add Error not found to the pages
//TODO: Design some api endpoints

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
