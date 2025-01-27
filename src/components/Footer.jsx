import EmailIcon from "../icons/EmailIcon";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LogoBlanco from "../images/logo-blanco.png";
const Footer = () => {
  return (
    <div className="w-5/6 m-auto">
      <hr />
      <div className="text-white flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-between py-8">
        <div className="w-[320px]">
          <img src={LogoBlanco} alt="Logo" className="w-full" />
        </div>

        <div className="flex flex-col w-full lg:w-[50%] space-y-4">
          <div className="flex flex-col items-center gap-y-4 md:gap-y-0 md:items-start md:flex-row capitalize text-xl justify-between">
            <p className="font-bold">Secciones: </p>
            <a href="#nosotros" className="borderLink">
              Nosotros
            </a>
            <a href="#servicios" className="borderLink">
              Servicios
            </a>
            <a href="contacto" className="borderLink">
              Contáctanos
            </a>
          </div>
          <div className="flex flex-col items-center gap-y-4 md:gap-y-0 md:items-start md:flex-row justify-between pt-8 md:mt-0">
            <p className="flex items-center gap-x-1">
              <LocationIcon /> Lima - Perú
            </p>
            <p className="flex items-center gap-x-1">
              <PhoneIcon /> +51 977 139 843 / 974 459 169
            </p>
            <p className="flex items-center gap-x-1">
              <EmailIcon /> correo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
