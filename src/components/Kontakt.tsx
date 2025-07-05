import ContactInfo from "./ContactInfo";
import { Instagram, Mail, Phone } from "lucide-react";

const Kontakt = () => {
  return (
    <section
      id="kontakt"
      className="py-8 px-6 scroll-mt-16"
      style={{ backgroundColor: "#ded0b7" }}
    >
      <h1 className="lg:text-5xl text-4xl  text-black text-center">Kontakt</h1>
      <div className="container mx-auto pt-10 px-6 text-center">
        {/* Promenjeno iz flex u grid za jednake širine kartica */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
          <ContactInfo
            icon={<Mail className="w-8 h-8 text-black" />}
            title="Email"
            value="mi.brend.official@gmail.com"
          />
          <ContactInfo
            icon={<Instagram className="w-8 h-8 text-black" />}
            title="Instagram"
            value="@mi.brend.official"
          />
          <ContactInfo
            icon={<Phone className="w-8 h-8 text-black" />}
            title="WhatsApp / Kontakt"
            value="+381 61 130 7182" // Prikazani broj
            link="https://wa.me/381611307182" // WhatsApp link
          />
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
