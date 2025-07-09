const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-stone-400 text-sm">
          &copy; {new Date().getFullYear()} MI Brend. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
