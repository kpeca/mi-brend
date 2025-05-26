const ContactInfo = (
  {
    icon,
    title,
    value,
    link,
  }: { icon: any; title: string; value: string; link?: string } // Dodat 'link' prop
) => (
  <div
    style={{ backgroundColor: "#faf2e6" }}
    className="w-[350px] md:w-full flex flex-col items-center text-center p-6 rounded-xl shadow-md border border-amber-100"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
    {link ? ( // Uslovno renderovanje: ako postoji link, prikaži <a> tag
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition-colors duration-300"
      >
        {value}
      </a>
    ) : (
      // Inače, prikaži <p> tag
      <p className="text-gray-600">{value}</p>
    )}
  </div>
);

export default ContactInfo;
