import AboutMain from "@/components/AboutMain";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MoreWork from "@/components/MoreWork";
import Motto from "@/components/Motto";
import Navbar from "@/components/Navbar";
import ServicesMain from "@/components/ServicesMain";
import Method from "@/components/Method";
import Tagline from "@/components/Tagline";
import WorkShowcase from "@/components/WorkShowcase";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Founders from "@/components/Founders";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Tagline />
        <WorkShowcase />
        <MoreWork />
        <Motto />
        <AboutMain />
        <Team />
        <Founders />
        <ServicesMain />
        <Method />
        <WhyUs />
        <Clients />
        {/* <HalftoneBird /> */}
        <Footer />
      </main>
    </>
  );
}