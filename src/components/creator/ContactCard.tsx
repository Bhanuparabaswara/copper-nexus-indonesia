import { Linkedin, Mail, Instagram } from "lucide-react";
import { MetallicButton } from "@/components/ui/MetallicButton";

export function ContactCard() {
  return (
    <div className="grid gap-3">
      <MetallicButton href="mailto:parabaswarabhanu@gmail.com">Discuss Collaboration</MetallicButton>
      <MetallicButton href="https://www.linkedin.com/in/bhanuparabaswara" variant="electric">View LinkedIn</MetallicButton>
      <div className="grid gap-3 sm:grid-cols-3">
        <a className="rounded-lg border border-copper/20 bg-black/18 p-4 text-center text-sm text-cream/72 transition hover:border-copper" href="https://www.instagram.com/bhanuparabaswara_">
          <Instagram className="mx-auto mb-2 h-5 w-5 text-copper" /> Instagram
        </a>
        <a className="rounded-lg border border-copper/20 bg-black/18 p-4 text-center text-sm text-cream/72 transition hover:border-copper" href="mailto:parabaswarabhanu@gmail.com">
          <Mail className="mx-auto mb-2 h-5 w-5 text-copper" /> Email
        </a>
        <a className="rounded-lg border border-copper/20 bg-black/18 p-4 text-center text-sm text-cream/72 transition hover:border-copper" href="https://www.linkedin.com/in/bhanuparabaswara">
          <Linkedin className="mx-auto mb-2 h-5 w-5 text-copper" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
