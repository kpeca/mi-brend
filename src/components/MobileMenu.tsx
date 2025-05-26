import NavLink from "./NavLink";

const MobileMenu = ({ navItems, activeSection, scrollToSection }: any) => {
  return (
    <div
      style={{ backgroundColor: "#ded0b7" }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 md:hidden transition-opacity duration-300 ease-in-out"
    >
      {navItems.map((item: any) => (
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
};

export default MobileMenu;
