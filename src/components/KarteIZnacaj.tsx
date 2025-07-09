const KarteIZnacaj = () => {
  return (
    <section
      id="karte-znacaj"
      className="py-8 px-6 lg:px-60 scroll-mt-16"
      style={{ backgroundColor: "#faf2e6" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 pt-4 md:gap-12">
        {/* Slika je uklonjena iz ove sekcije */}
        {/* Tekstualni sadržaj sada zauzima celu širinu */}
        <h1 className="lg:text-5xl text-4xl text-black  text-center ">
          Karte i Značaj
        </h1>
        <div className="w-full text-center">
          {/* Uklonjene md:w-1/2 i order klase, dodata w-full */}
          <h3 className="text-3xl  text-black mb-4">MI Karte</h3>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            MI karte su dizajnom veoma sofisticirane, a po nameni nadilaze
            klasične igre i pitanja – one su moćan psihoterapijski alat za
            promenu. Svaka karta sadrži dubinsko pitanje i svoje produbljeno
            objašnjenje dostupno putem QR koda, koji vodi ka dubljem
            razumevanju. Većina postojećih karata su više igre i zabavni alati,
            dok su MI karte zasnovane na ozbiljnim psihološkim principima i
            proizašle iz psihoterapijskog konteksta.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Ove karte nisu samo karte, već investicija koja se prenosi na ceo
            život.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            Kada u ruke uzmete ove karte, držite mnogo više od običnog seta
            pitanja. Ove karte grade i jačaju veze - psihološki sofisticiran
            alat za parove koji žele da prevaziđu nesporazume i ostvare pravu
            ljubav kroz dublju povezanost
          </p>
          <h3 className="text-3xl  text-black mb-4">Značaj</h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Značaj Mi karata za emocionalnu i psihološku inteligenciju.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            Veštine koje razvijate kroz autentične dijaloge o najznačajnijim
            aspektima života, stičete sposobnosti koje su temelj uspešnih odnosa
            i ličnog blagostanja:
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Nisu ograničene na trenutke kada koristite karte. One postaju deo
            vaše emocionalne inteligencije i prenose se na:
          </p>
          <ul className="list-disc list-inside text-center text-lg leading-relaxed space-y-2 mb-4">
            <li>Profesionalne odnose i liderstvo</li>
            <li>Roditeljstvo i odgajanje dece</li>
            <li>Prijateljstva i društvene situacije</li>
            <li>Lični razvoj i samoaktuelizaciju</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            -Nismo vas ostavili same da se zaglavite u pitanjima tu je MI - QR
            kod
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            Vaš ključ ka sigurnom putovanju- jer ova pitanja imaju duboku
            psihološku pozadinu, a tamo imate mogućnost da dobijete pomoć u
            slučaju da se zaglavite sa nekim pitanjima, temama, konfliktima ili
            nerazumevanjima.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Na taj način ste dobili više od običnog seta karata dobili ste
            mogućnost da razvijete:
          </p>
          <ul className="list-disc list-inside text-left text-lg leading-relaxed space-y-2">
            <li>
              Emocionalna pismenost kroz praksu - Učite da precizno
              prepoznajete, imenujete i izražavate složene emocionalne stanja
              koja često ostaju zarobljena u tišini naših unutrašnjih svetova.
            </li>
            <li>
              Empatija kao živa veština - Kroz duboko slušanje i razumevanje
              tuđih iskustava, prirodno razvijate sposobnost da se emotivno
              postavite u perspektivu druge osobe, što je osnova svih
              kvalitetnih odnosa.
            </li>
            <li>
              Samosvest kao putokaz - Istraživanje vlastitih motivacija,
              strahova, želja i obrazaca ponašanja kroz strukturirane razgovore
              omogućava vam da postanete svesni pokretač vlastitog života.
            </li>
            <li>
              Emocionalna regulacija u akciji- Suočavanje sa potencijalno
              osetljivim temama u bezbednom okruženju omogućava vam da razvijete
              zdravije načine upravljanja intenzivnim emocijama.
            </li>
            <li>
              Rešavanje problema kroz povezanost- Kroz deljenje najličnijih
              aspekata života, razvijate sofisticirane veštine rešavanja
              problema koje se primenjuju na sve životne oblasti.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KarteIZnacaj;
