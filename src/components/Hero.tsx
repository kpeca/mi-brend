import HeroImage2 from "../assets/img/hero.png";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/381611307182", "_blank");
  };
  return (
    <section className="pt-8" style={{ backgroundColor: "#ded0b7" }}>
      <div className="container mx-auto flex flex-col  items-center justify-between gap-6 pt-16 md:pt-20 pb-10">
        <img className="bg-cover w-full h-full" src={HeroImage2} />
        <button
          onClick={handleWhatsAppClick}
          className="bg-black text-white text-lg font-serif px-4 py-2 md:px-8 md:py-3 rounded-md cursor-pointer"
        >
          Poruči svoj set
        </button>
      </div>
    </section>
  );
};

export default Hero;
