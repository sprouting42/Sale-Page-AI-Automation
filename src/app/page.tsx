
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
