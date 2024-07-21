import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Teams from "@/components/teams";
import Image from "next/image";
import Services from "@/components/sevices"
import Navbar from "@/components/navbar";
import Project from "@/components/projects";
import DevStage from "@/components/dev-stage";

export default function Home() {
  return (
    <main className="bg-[#F2F4F7]" >
      <Navbar/>
      <Services/>
      <Project/>
      <Contact/>
      <DevStage/>
      <Teams/>
      <Faq/>
    </main>
  );
}
