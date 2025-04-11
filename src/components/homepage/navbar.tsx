import NavHeader from "@/components/ui/nav-header"
import { IntroTexte } from "./Introtxt";

function Navbar() {
  return (
    <header className="flex flex-col h-screen p-10">
      <div className="mb-auto">
        <NavHeader />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <IntroTexte />
      </div>
    </header>
  );
}

export { Navbar }