import ButtonBot from "@/components/experiencepage/ButtonBot";
import ExperienceSection from "@/components/experiencepage/ExperienceXP";
import { Navbar } from "@/components/experiencepage/navbar";

export default function Experience() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-indigo-900/30 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Navbar />
        
        <div className="mt-10">
          <ExperienceSection />
        </div>
        
        <div className="mt-12">
          <ButtonBot />
        </div>
      </div>
    </div>
  );
}