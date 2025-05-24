import img1 from '../assets/img/img1.png'

const About = () => {
  return (
    <section id="o-brendu" className="py-16 px-6" style={{ backgroundColor: '#ecd6b2' }}>
        <h2 className="text-4xl font-extrabold text-amber-800 mb-6 text-center mt-10">O Brendu</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-16 md:pt-20">
        {/* Slika - uvek prva u JSX-u, pa će na mobilnom biti iznad teksta */}
        <div className={`md:w-1/2 order-2`}>
          <img
            src={img1}
            alt="Ilustracija mosta koji spaja srca i umove"
            className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            onError={(e:any) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/600x400/D2B48C/FFFFFF?text=Slika+nije+dostupna`;
            }}
          />
        </div>
        {/* Tekstualni sadržaj */}
        <div className={`md:w-1/2  text-center order-1`}>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            "<span className="font-bold text-amber-800">MI</span>" predstavlja most između srca i uma – psihologija u službi stvarnih odnosa.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            U vremenu kada su odnosi možda najugroženiji u istoriji, u svetu gde je sve brzo, lako i površno, pravo zajedništvo, ljubav i prihvatanje često izostaju.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Zamenjuju ih navike, pretpostavke i tišine koje ne leče.
          </p>
          <p className="mb-6 text-xl font-semibold text-amber-800">
            Ali rešenje postoji.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            "<span className="font-bold text-amber-800">Mi</span>" je brend koji je nastao iz potrebe za množinom — za spajanjem. Iz iskonske čežnje pojedinca da pripada, da se poveže, da bude deo.
          </p>
          <p className="mb-6 text-xl font-bold text-gray-900">
            "<span className="font-bold text-amber-800">MI" nije samo ime – to je poziv na zajedništvo.</span>
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Istinska povezanost se ne podrazumeva. Ona se gradi — ali možda ne znate kako. Možda nikada niste imali priliku da je zaista osetite. Možda ne znate kako da budete <span className="font-bold text-gray-900">MI</span> — kao partneri, prijatelji, kolege.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Zato smo <span className="font-bold text-amber-800">MI</span> tu — kao prostor, kao poziv, kao put. Da se sretnete na nov način. Da razgovarate dublje. Da volite iskrenije. Da naučite kako da budete zajedno — stvarno.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Prava bliskost ne traži da se odreknete sebe — već da budete viđeni u celosti.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Zato "<span className="font-bold text-amber-800">MI</span>" ne briše "<span className="font-bold text-amber-800">JA</span>", već ga podržava.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About
