import HeroImage2 from "../assets/img/hero.png";

const Hero = () => {
  return (
    <section style={{ backgroundColor: "#ded0b7" }}>
      <div className="container mx-auto flex flex-col  items-center justify-between gap-6 pt-16 md:pt-20 pb-10">
        <img className="bg-cover w-full h-full" src={HeroImage2} />
        <button className="bg-black text-white text-lg font-serif px-6 py-3 rounded-md cursor-pointer">
          Poruči svoj set
        </button>
      </div>
    </section>
  );
};

export default Hero;
