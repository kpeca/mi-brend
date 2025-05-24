import { Menu, X } from "lucide-react"
import NavLink from "./NavLink"

const Header = ({ navItems, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }: any) => {
  return (

    <header className="fixed top-0 left-0 right-0 shadow-md z-50 p-4" style={{ backgroundColor: '#ecd6b2' }}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold text-white">
          MI Brend
        </div>

        {/* Hamburger icon for mobile devices */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Navigation links for desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          {navItems.map((item:any) => (
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


  )
}

export default Header
