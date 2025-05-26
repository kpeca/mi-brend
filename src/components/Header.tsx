import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";

const Header = ({
  navItems,
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}: any) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/381645811258", "_blank");
  };
  return (
    <header
      className="fixed top-0 left-0 right-0 shadow-md z-50 p-4 font-serif"
      style={{ backgroundColor: "#ded0b7" }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl text-black">Mi Brend</div>

        {/* Hamburger icon for mobile devices */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={32} /> : <Menu color="black" size={32} />}
          </button>
        </div>

        {/* Navigation links for desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="bg-black text-white text-lg font-serif px-6  rounded-md cursor-pointer"
          >
            Poruči svoj set
          </button>
          {navItems.map((item: any) => (
            <NavLink
              key={item.id}
              id={item.id}
              text={item.text}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
