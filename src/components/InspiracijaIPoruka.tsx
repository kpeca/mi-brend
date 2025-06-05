import img2 from "../assets/img/img2.png";

const InspiracijaIPoruka = () => {
  return (
    <section
      id="inspiracija-poruka"
      className="py-8 px-6 scroll-mt-16"
      style={{ backgroundColor: "#ded0b7" }}
    >
      <h1 className="lg:text-5xl text-4xl  text-black text-center">
        Inspiracija i Poruka
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-4 md:gap-12">
        {/* Slika - uvek prva u JSX-u, pa će na mobilnom biti iznad teksta */}
        <div className={`md:w-1/2 order-1`}>
          <img
            src={img2}
            alt="Ilustracija mosta koji spaja srca i umove"
            className="w-full h-auto rounded-xl  transform transition-transform duration-500 hover:scale-105"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/600x400/D2B48C/FFFFFF?text=Slika+nije+dostupna`;
            }}
          />
        </div>
        {/* Tekstualni sadržaj */}
        <div className={`md:w-1/2 sm:order-1  text-center order-2`}>
          <>
            <h3 className="text-3xl  text-black mb-4">Inspiracija</h3>
            <p className="mb-4 text-lg leading-relaxed italic">
              “Jer previše puta ostajemo uskraćeni za ono što najviše želimo:
              pravu ljubav i duboku bliskost.”
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              "Inspirisani dubokom ljudskom potrebom za povezivanjem, ali i
              izazovima savremenih odnosa – od raskida i razvoda do nesporazuma
              u muško-ženskoj dinamici – stvorili smo iskustvo koje prevazilazi
              jezičke i kulturne razlike."
            </p>
            <h3 className="text-3xl  text-black mb-4">Poruka</h3>
            <p className="mb-4 text-lg leading-relaxed">
              Za sve koji se u vezi osećaju sami, neshvaćeni i neviđeni –
              čekanje da se stvari same promene nije rešenje. Promena počinje
              iskrenim dijalogom i spremnošću da se pogledamo i slušamo.
            </p>
            <p className="text-lg leading-relaxed">
              Ako si spremna/spreman da zidaš mostove umesto zidova, "
              <span className=" text-black">MI</span>" je za tebe.
            </p>
            <p className="mt-8 text-3xl  text-black">
              Ne radiš na vezi zato što nešto ne valja. Već zato što znaš koliko
              vredi.
            </p>
          </>
        </div>
      </div>
    </section>
  );
};

export default InspiracijaIPoruka;
