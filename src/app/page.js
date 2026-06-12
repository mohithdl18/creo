import AboutMain from "@/components/AboutMain";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MoreWork from "@/components/MoreWork";
import Motto from "@/components/Motto";
import Navbar from "@/components/Navbar";
import Nav from "@/components/Nav";
import Nav2 from "@/components/Nav2";
import ServicesMain from "@/components/ServicesMain";
import Method from "@/components/Method";
import Tagline from "@/components/Tagline";
import WorkShowcase from "@/components/WorkShowcase";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import HalftoneBird from "@/components/HalftoneBird";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Nav2 />
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