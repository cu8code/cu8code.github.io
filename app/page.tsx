import About from "@/components/About";
import Career from "@/components/Career";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Project from "@/components/Projects";
import ScrollImage from "@/components/ScrollImage";

const Home = async () => {
  return (
    <>
      <Navigation />
      <Hero />
      <div className="z-20 hidden md:block absolute -bottom-48 left-[48%]">
          <ScrollImage />
      </div>
      <About />
      <Career />
      <Project />
    </>
  );
}


export default Home;