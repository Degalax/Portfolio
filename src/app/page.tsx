import { FooterPage } from "@/components/homepage/FooterPage";
import { Header } from "@/components/homepage/header";
import { Herosection } from "@/components/homepage/Herosection";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <Herosection />
          </div>
          
          <div className="w-full max-w-md mx-auto mt-8 md:mt-12 mb-16">
            <FooterPage />
          </div>
        </main>
        
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-transparent via-indigo-500 to-transparent opacity-50"></div>
      </div>
    </div>
  );
}