import  { useState,  } from 'react';
import { Mail, Instagram, Phone, Facebook, Linkedin } from 'lucide-react'; // Uvozimo Menu i X ikone
import Header from './components/Header';
import About from './components/About';
import MobileMenu from './components/MobileMenu';
import img2 from '../src/assets/img/img2.png'
import img3 from '../src/assets/img/img3.png'

// Glavna App komponenta koja sadrži sve sekcije
function App() {

    const [activeSection, setActiveSection] = useState('o-brendu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  const navItems = [
    { id: 'o-brendu', text: 'O Brendu' },
    { id: 'inspiracija-poruka', text: 'Inspiracija i Poruka' },
    { id: 'karte-znacaj', text: 'Karte i Značaj' },
    { id: 'uputstvo', text: 'Uputstvo' },
    // { id: 'cena', text: 'Cena' },
    { id: 'kontakt', text: 'Kontakt' },
  ];






  return (
    <div className="min-h-screen font-sans text-gray-800"> {/* Uklonjena glavna bg-gradient jer sekcije imaju specifične boje */}
      <Header         navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}/>
  {/* <Hero /> */}
      {/* Sekcija: O Brendu */}
      {/* <Section
        id="o-brendu"
        title="O Brendu"
        imageSrc="https://placehold.co/600x400/D2B48C/FFFFFF?text=Most+srca+i+uma"
        altText="Ilustracija mosta koji spaja srca i umove"
        layout="image-right"
        bgColor="#e9d1ab" // Boja #d9c098
        content={
          <>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              "<span className="font-bold text-gray-900">MI</span>" predstavlja most između srca i uma – psihologija u službi stvarnih odnosa.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              U vremenu kada su odnosi možda najugroženiji u istoriji, u svetu gde je sve brzo, lako i površno, pravo zajedništvo, ljubav i prihvatanje često izostaju.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Zamenjuju ih navike, pretpostavke i tišine koje ne leče.
            </p>
            <p className="mb-6 text-xl font-semibold text-gray-900">
              Ali rešenje postoji.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              "<span className="font-bold text-gray-900">Mi</span>" je brend koji je nastao iz potrebe za množinom — za spajanjem. Iz iskonske čežnje pojedinca da pripada, da se poveže, da bude deo.
            </p>
            <p className="mb-6 text-xl font-bold text-gray-900">
              "<span className="font-bold text-gray-900">MI</span>" nije samo ime – to je poziv na zajedništvo.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Istinska povezanost se ne podrazumeva. Ona se gradi — ali možda ne znate kako. Možda nikada niste imali priliku da je zaista osetite. Možda ne znate kako da budete <span className="font-bold text-gray-900">MI</span> — kao partneri, prijatelji, kolege.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Zato smo <span className="font-bold text-gray-900">MI</span> tu — kao prostor, kao poziv, kao put. Da se sretnete na nov način. Da razgovarate dublje. Da volite iskrenije. Da naučite kako da budete zajedno — stvarno.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Prava bliskost ne traži da se odreknete sebe — već da budete viđeni u celosti.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Zato "<span className="font-bold text-gray-900">MI</span>" ne briše "<span className="font-bold text-gray-900">JA</span>", već ga podržava.
            </p>
          </>
        }
      /> */}
      
      {isMenuOpen && (
        <MobileMenu
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}
     <About />
      {/* Sekcija: Inspiracija i Poruka */}
      <Section
        id="inspiracija-poruka"
        title="Inspiracija i Poruka"
        imageSrc={img2}
        altText="Ilustracija inspiracije i poruke"
        layout="image-left"
        bgColor="#f9edd7"
        content={
          <>
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Inspiracija</h3>
            <p className="mb-4 text-lg leading-relaxed italic">
              “Jer previše puta ostajemo uskraćeni za ono što najviše želimo: pravu ljubav i duboku bliskost.”
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              "Inspirisani dubokom ljudskom potrebom za povezivanjem, ali i izazovima savremenih odnosa – od raskida i razvoda do nesporazuma u muško-ženskoj dinamici – stvorili smo iskustvo koje prevazilazi jezičke i kulturne razlike."
            </p>
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Poruka</h3>
            <p className="mb-4 text-lg leading-relaxed">
              Za sve koji se u vezi osećaju sami, neshvaćeni i neviđeni – čekanje da se stvari same promene nije rešenje. Promena počinje iskrenim dijalogom i spremnošću da se pogledamo i slušamo.
            </p>
            <p className="text-lg leading-relaxed">
              Ako si spremna/spreman da zidaš mostove umesto zidova, "<span className="font-bold text-amber-700">MI</span>" je za tebe.
            </p>
            <p className="mt-8 text-2xl font-bold text-amber-800">
              <span className="font-bold text-amber-700">MI</span> – jer najlepša putovanja počinju od “nas”.
            </p>
          </>
        }
      />

      {/* Sekcija: Karte i Značaj */}
      <Section
        id="karte-znacaj"
        title="Karte i Značaj"
        imageSrc={img3}
        altText="Ilustracija karata i njihovog značaja"
        layout="image-right"
        bgColor="#e9d1ab"
        content={
          <>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Ova sekcija će detaljnije objasniti šta su "MI" karte, kako su dizajnirane i zašto su ključne za produbljivanje odnosa.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Svaka karta je pažljivo osmišljena da podstakne iskrenu komunikaciju i razumevanje između partnera, prijatelja ili kolega.
            </p>
          </>
        }
      />

      {/* Sekcija: Uputstvo */}
      <Section
        id="uputstvo"
        title="Uputstvo"
        imageSrc="https://placehold.co/600x400/D2B48C/FFFFFF?text=Uputstvo"
        altText="Ilustracija uputstva za korišćenje"
        layout="image-left"
        bgColor="#f9edd7"
        content={
          <>
            <p className="mb-4 text-lg leading-relaxed">
              U ovoj sekciji ćete pronaći detaljno uputstvo za korišćenje "MI" karata.
            </p>
            <ul className="list-disc list-inside text-left text-lg leading-relaxed space-y-2">
              <li>Korak 1: Pripremite se za iskren razgovor.</li>
              <li>Korak 2: Izvucite kartu i pročitajte pitanje.</li>
              <li>Korak 3: Podelite svoje misli i osećanja.</li>
              <li>Korak 4: Pažljivo slušajte odgovor druge osobe.</li>
              <li>Korak 5: Uživajte u produbljivanju vašeg odnosa.</li>
            </ul>
          </>
        }
      />

      {/* Sekcija: Cena
      <Section
        id="cena"
        title="Cena"
        imageSrc="https://placehold.co/600x400/F4A460/FFFFFF?text=Cena"
        altText="Ilustracija cena proizvoda"
        layout="image-right"
        bgColor="#d9c098"
        content={
          <>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Informacije o cenama "MI" karata i dostupnim paketima.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 text-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Standardni Paket</h3>
              <p className="text-4xl font-extrabold text-amber-700 mb-4">XX.XX EUR</p>
              <p className="text-gray-600">Uključuje set "MI" karata i digitalno uputstvo.</p>
              <button className="mt-6 bg-amber-700 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:bg-amber-800 transition-colors duration-300">
                Kupi Sada
              </button>
            </div>
          </>
        }
      /> */}

      {/* Sekcija: Kontakt / Ostanimo Povezani */}
      <section id="kontakt" className="py-16" style={{ backgroundColor: '#ecd6b2' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className=" text-4xl font-extrabold text-amber-800 mb-12">Ostanimo Povezani</h2>
          {/* Promenjeno iz flex u grid za jednake širine kartica */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
            <ContactInfo
              icon={<Mail className="w-8 h-8 text-amber-700" />}
              title="Email"
              value="mi.brend.official@gmail.com"

            />
            <ContactInfo
              icon={<Instagram className="w-8 h-8 text-amber-700" />}
              title="Instagram"
              value="@mi.brend.official"
            />
            <ContactInfo
              icon={<Phone className="w-8 h-8 text-amber-700" />}
              title="WhatsApp / Kontakt"
              value="+381 64 581 1258" // Prikazani broj
              link="https://wa.me/381645811258" // WhatsApp link
            />
          </div>
        </div>
      </section>

      {/* Podnožje (Footer) */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-stone-400 hover:text-white transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} MI Brend. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Komponenta za opštu sekciju sa slikom i tekstom
const Section = ({ id, title, imageSrc, altText, layout = 'image-right', content, bgColor }:{id:string,title:string,imageSrc:string,altText:string,layout:string,content:any,bgColor:string}) => {
  const isImageRight = layout === 'image-right';

  return (
    <section id={id} className={`py-16 px-6`} style={{ backgroundColor: bgColor }}>
        <h2 className="text-4xl font-extrabold text-amber-800 mb-6 text-center">{title}</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-24 md:pt-16">
        {/* Slika */}
        <div className={`md:w-1/2 ${isImageRight ? 'order-2' : 'order-1'}`}>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            onError={(e:any) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/600x400/D2B48C/FFFFFF?text=Slika+nije+dostupna`;
            }}
          />
        </div>
        {/* Tekstualni sadržaj */}
        <div className={`md:w-1/2 ${isImageRight ? 'order-1' : 'order-2'} text-center md:text-left`}>
          {content}
        </div>
      </div>
    </section>
  );
};

// Komponenta za kontakt informacije

// Komponenta za kontakt informacije
const ContactInfo = ({ icon, title, value, link }:{icon:any,title:string,value:string, link?:string})  => ( // Dodat 'link' prop
  <div className="w-[400px] flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-amber-100">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-amber-700 mb-2">{title}</h3>
    {link ? ( // Uslovno renderovanje: ako postoji link, prikaži <a> tag
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700 transition-colors duration-300">
        {value}
      </a>
    ) : ( // Inače, prikaži <p> tag
      <p className="text-gray-600">{value}</p>
    )}
  </div>
);


export default App;
