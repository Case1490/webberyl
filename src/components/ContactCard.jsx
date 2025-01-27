import GmailIcon from "../icons/GmailIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import SocialNetwork from "./SocialNetwork";

const ContactCard = () => {
  const number = import.meta.env.VITE_NUMBER;
  const gmail = import.meta.env.VITE_GMAIL;

  return (
    <div
      className="bg-white p-4 rounded-xl shadow-xl w-5/6 sm:w-3/4 lg:w-1/2 m-auto my-20 lg:my-28 text-center flex flex-col items-center"
      id="contacto"
    >
      <h1 className=" text-2xl sm:text-4xl text-PurpleMain font-bold">
        ¡ CONTÁCTANOS AHORA !
      </h1>
      <p className=" text-lg sm:text-xl">¿En qué te ayudamos?</p>
      <div className="flex items-center justify-center gap-x-3 my-3">
        <a
          href={`https://wa.me/${number}?text=Hola,%20quiero%20más%20información!`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </a>
        <a href={`mailto:${gmail}`}>
          <GmailIcon />
        </a>
      </div>
      <p className=" text-lg sm:text-xl w-5/6 sm:w-3/4">
        Escríbenos y nos contactaremos contigo, también encuentranos en nuestras
        redes como:
      </p>
      <div className=" flex flex-col items-center gap-y-4 sm:flex-row sm:items-end my-8 sm:gap-x-4">
        <SocialNetwork />
        <p className="font-bold">@Webberyl</p>
      </div>
    </div>
  );
};

export default ContactCard;
