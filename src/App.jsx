import About from "./components/About";
import Contact from "./components/Contact";
import CustomDrawer from "./components/CustomDrawer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <CustomDrawer />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
