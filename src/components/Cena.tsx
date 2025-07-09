const Cena = () => {
  return (
    <section
      id="cena"
      className="py-8 px-6 lg:px-60 scroll-mt-16"
      style={{ backgroundColor: "#faf2e6" }}
    >
      <h1 className="lg:text-5xl text-4xl text-black  text-center ">Cena</h1>
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 pt-4 md:gap-12">
        {/* Slika je uklonjena iz ove sekcije */}
        {/* Tekstualni sadržaj sada zauzima celu širinu */}
        <div className="w-full text-center">
          <p className="text-3xl text-black mb-4">3.600 dinara</p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Neprocenjiva vrednost po ceni manjoj od jedne seanse partnerske
            psihoterapije!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cena;
