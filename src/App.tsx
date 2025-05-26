import { useState } from "react";
import Header from "./components/Header";
import OBrendu from "./components/OBrendu";
import MobileMenu from "./components/MobileMenu";

import Hero from "./components/Hero";
import InspiracijaIPoruka from "./components/InspiracijaIPoruka";
import KarteIZnacaj from "./components/KarteIZnacaj";
import Uputstvo from "./components/Uputstvo";
import Cena from "./components/Cena";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

const navItems = [
  { id: "o-brendu", text: "O Brendu" },
  { id: "inspiracija-poruka", text: "Inspiracija i Poruka" },
  { id: "karte-znacaj", text: "Karte i Značaj" },
  { id: "uputstvo", text: "Uputstvo" },
  { id: "cena", text: "Cena" },
  { id: "kontakt", text: "Kontakt" },
];
// Glavna App komponenta koja sadrži sve sekcije
function App() {
  const [activeSection, setActiveSection] = useState("o-brendu");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <div className="min-h-screen font-serif text-gray-800">
      {/* Uklonjena glavna bg-gradient jer sekcije imaju specifične boje */}
      <Header
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      {isMenuOpen && (
        <MobileMenu
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}
      <OBrendu />
      <InspiracijaIPoruka />
      <KarteIZnacaj />
      <Uputstvo />
      <Cena />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default App;
