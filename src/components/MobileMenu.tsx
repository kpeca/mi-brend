import NavLink from './NavLink';

const MobileMenu = ({ navItems, activeSection, scrollToSection }:any) => {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 md:hidden transition-opacity duration-300 ease-in-out" style={{ backgroundColor: '#d9c098' }}>
      {navItems.map((item:any) => (
        <NavLink
          key={item.id}
          id={item.id}
          text={item.text}
          isMobileMenu={true} // Indicate that this is for mobile menu
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      ))}
    </div>
  );
}

export default MobileMenu
