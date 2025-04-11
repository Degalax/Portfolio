import { Navbar } from "@/components/educationpage/navbar";
import { Education } from "@/components/educationpage/EducationPage";
import ButtonBot from "@/components/educationpage/ButtonBot";

export default function education() {
    return (
        <div className="bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 min-h-screen">
            <div className="flex flex-col items-center justify-center py-16">
                <Navbar />
                
                <div className="mt-12 mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2"></h1>
                </div>

                <Education />

                <div className="mt-8">
                    <ButtonBot />
                </div>
            </div>
        </div>
    );
}