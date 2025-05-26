import img3 from "../assets/img/img3.png";

const Uputstvo = () => (
  <section
    id="uputstvo"
    className="py-8 px-6 scroll-mt-16"
    style={{ backgroundColor: "#ded0b7" }}
  >
    <h1 className="lg:text-5xl text-4xl  text-black text-center">Uputstvo</h1>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-4 md:gap-12">
      {/* Slika - uvek prva u JSX-u, pa će na mobilnom biti iznad teksta */}
      <div className={`md:w-1/2 order-1`}>
        <img
          src={img3}
          alt="Ilustracija mosta koji spaja srca i umove"
          className="w-full h-auto rounded-xl  transform transition-transform duration-500 hover:scale-105"
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/D2B48C/FFFFFF?text=Slika+nije+dostupna`;
          }}
        />
      </div>
      {/* Tekstualni sadržaj */}
      <div className={`md:w-1/2 sm:order-1  order-2`}>
        <p className="mb-4 text-lg leading-relaxed">
          Karte se sastoje od 55 pitanja podeljenih u 5 glavnih oblasti.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Raspored je pažljivo osmišljen i preporučuje se da ga sledite, jer
          prati prirodan tok ličnog i međuljudskog razvoja. Svaka etapa vas
          uvodi dublje u razumevanje sebe i drugog.
        </p>
        <ol className="list-disc list-inside text-left text-lg leading-relaxed space-y-2 mb-4">
          <li>Detinjstvo i formiranje vrednosti</li>
          <li>Suočavanje s konfliktima</li>
          <li>Postavljanje granica</li>
          <li>Izgradnja poverenja</li>
          <li>Stvaranje bliskosti</li>
          <li>Razvijanje zdrave seksualnosti</li>
        </ol>
        <p className="text-lg leading-relaxed">
          Ovakva struktura podržava dublje razumevanje unutrašnjih dinamika i
          kvaliteta odnosa s drugima, a ujedno vas uvodi u razumevanje i
          poimanje partnerovog i sopstvenog iskustva.
        </p>
      </div>
    </div>
  </section>
);

export default Uputstvo;
