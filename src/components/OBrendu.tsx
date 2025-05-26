import img1 from "../assets/img/img1.png";

const OBrendu = () => {
  return (
    <section
      id="o-brendu"
      className="py-8 px-6 scroll-mt-16"
      style={{ backgroundColor: "#faf2e6" }}
    >
      <h1 className="lg:text-5xl text-4xl text-black  text-center ">
        O Brendu
      </h1>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-4 md:gap-12">
        {/* Slika - uvek prva u JSX-u, pa će na mobilnom biti iznad teksta */}
        <div className={`md:w-1/2 order-2`}>
          <img
            src={img1}
            alt="Ilustracija mosta koji spaja srca i umove"
            className="w-full h-auto rounded-xl  transform transition-transform duration-500 hover:scale-105"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/600x400/D2B48C/FFFFFF?text=Slika+nije+dostupna`;
            }}
          />
        </div>
        {/* Tekstualni sadržaj */}
        <div className={`md:w-1/2  text-center order-1`}>
          <p className="mb-4 text-xl leading-relaxed text-gray-800">
            U vremenu kada su odnosi možda najugroženiji u istoriji, u svetu gde
            je sve brzo, lako i površno, pravo zajedništvo, ljubav i prihvatanje
            često izostaju.
          </p>
          <p className="mb-4 text-xl leading-relaxed text-gray-800">
            Zamenjuju ih navike, pretpostavke i tišine koje ne leče.
          </p>
          <p className="mb-4 text-xl leading-relaxed text-gray-800">
            Istinska povezanost se ne podrazumeva. Ona se gradi — ali možda ne
            znate kako. Možda nikada niste imali priliku da je zaista osetite.
          </p>
          <p className="mb-4 text-xl leading-relaxed text-gray-800">
            Možda ne znate kako da budete{" "}
            <span className="font-bold text-gray-900">MI</span> — kao partneri,
            prijatelji, kolege.
          </p>
          <p className="mb-6 text-xl font-semibold text-gray-900">
            Ali rešenje postoji.
          </p>
          <p className="text-xl leading-relaxed text-gray-800">
            "<span className="font-bold text-gray-900">MI</span>" predstavlja
            most između srca i uma– psihologija u službi stvarnih odnosa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OBrendu;
