import Hero from "@/components/Hero";
import TestImage from "@/../assets/backiee-195094-landscape.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-3 items-center justify-center font-sans">
      <Hero />
      <div className="mx-[10vw] gap-3">
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[40vh] items-center overflow-hidden p-2">
          <div className="relative w-full h-75 md:h-full min-h-100">
            <Image
              src={TestImage}
              alt="University of Khartoum Students"
              fill
              className="object-cover" // Ensures image fills the area without distortion
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16 font-poppins">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              Who Are We
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a group of students from{" "}
              <span className="font-semibold text-gray-900">
                University of Khartoum
              </span>
              , from different faculties, skill sets, and hobbies. However, we
              are all united by our passion for Google technologies and the
              world of tech. We are excited to learn and grow together, and we
              are committed to making a positive impact on the tech community in
              Sudan.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
