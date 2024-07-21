import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Teams from "@/components/teams";
import Services from "@/components/sevices";
import Project from "@/components/projects";
import DevStage from "@/components/dev-stage";
import Navbar from "@/components/sticky-navbar";
import Industries from "@/components/industries";
import Landing from "@/components/home";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#F2F4F7] scroll-smooth overflow-y-scroll h-lvh ">
      <Navbar />
      <Landing/>
      <Services />
      <Industries/>
      <Project />
      <Contact />
      <DevStage />
      <Teams />
      <Faq />
      <Footer/>
    </main>
  );
}
