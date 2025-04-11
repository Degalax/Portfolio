import ButtonBot from "@/components/skillspage/ButtonBot";
import { Navbar } from "@/components/skillspage/navbar";
import { SkillsGrid } from "@/components/skillspage/SkillsPage";

export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        
        <div className="mt-12">
          <SkillsGrid />
        </div>
        
        <div className="mt-12">
          <ButtonBot />
        </div>
      </div>
    </div>
  );
}