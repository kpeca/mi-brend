const Cena = () => {
  return (
    <section
      id="cena"
      className="py-8 px-6 lg:px-60 scroll-mt-16"
      style={{ backgroundColor: "#faf2e6" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 pt-4 md:gap-12">
        {/* Slika je uklonjena iz ove sekcije */}
        {/* Tekstualni sadržaj sada zauzima celu širinu */}
        <h1 className="lg:text-5xl text-4xl text-black  text-center ">Cena</h1>
        <div className="w-full text-center">
          <p className="text-4xl text-black mb-4">3.600 dinara</p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Neprocenjiva vrednost po ceni manjoj od jedne seanse partnerske
            psihoterapije! Uložite u alat koji unapređuje vaš odnos i čini
            svakodnevne razgovore dubljim, iskrenijim i značajnijim.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Uživajte u ovoj igri i neka vas svaki razgovor još više zbliži!
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Kvalitet komunikacije određuje kvalitet veze. Ne čitajte misli, već
            otvoreno razgovarajte i prevaziđite nesigurnosti. U vašim rukama je
            alat koji vas može naučiti da slobodno iskažete svoja osećanja.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Uložite u dublje razgovore, jaču povezanost i ljubav koja traje!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cena;
