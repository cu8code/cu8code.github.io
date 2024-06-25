import About from "@/components/About";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PointerComponent from "@/components/Pointer";
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
    </>
  );
}


export default Home;