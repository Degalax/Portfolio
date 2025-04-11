import ButtonBot from "@/components/contactpage/ButtonBot";
import ContactCTA from "@/components/contactpage/ContactPage";
import { Navbar } from "@/components/contactpage/navbar";

export default function Contact() {
    return ( 
        <div className="bg-gradient-to-b from-slate-900 via-violet-900/30 to-slate-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Navbar />
                <ContactCTA />
                <ButtonBot />
            </div>
        </div>
    )
}