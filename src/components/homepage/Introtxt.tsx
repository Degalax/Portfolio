"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `
My name is Ilian LAAMARA, I'm 18 and in my 1st year at ENIGMA. 
I'm passionate about IT and am training to become a cyber-security engineer.
I have a baccalaureate specializing in mathematics and physical chemistry.

`;

export function IntroTexte() {
  return <TextGenerateEffect duration={1} filter={false} words={words} />;
}
