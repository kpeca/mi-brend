const NavLink = ({
  id,
  text,
  isMobileMenu = false,
  activeSection,
  scrollToSection,
}: any) => {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(id);
      }}
      className={`px-4 py-2 rounded-full transition-colors duration-300 ${
        isMobileMenu
          ? "text-2xl text-black hover:bg-white hover:bg-opacity-20" // Styling for mobile menu links
          : activeSection === id
          ? "bg-amber-50 text-black" // Styling for active desktop link
          : "text-gray-700 hover:bg-amber-50" // Styling for inactive desktop link
      }`}
    >
      {text}
    </a>
  );
};
export default NavLink;
