import { motion } from "framer-motion";

const MainPage = () => {
  const handleRedirect = () => {
    const phoneNumber = import.meta.env.VITE_NUMBER;
    const message = "Hola, quisiera agendar una cita.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="backgroundMainPage">
      {/* Solo el div hijo está siendo animado */}
      <motion.div
        initial={{ x: -1000 }} // posición inicial fuera de la pantalla a la izquierda
        animate={{ x: 0 }} // animación para moverse hacia la posición inicial
        transition={{ type: "spring", stiffness: 100, damping: 25 }} // transición suave
        className="w-5/6 mx-auto lg:mx-0 pt-24 md:pt-28 lg:pt-0 text-center lg:text-left lg:w-1/3 lg:ml-28 text-white space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          Despega tu{" "}
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Presencia web
          </span>
        </h1>
        <p className="w-full lg:w-[400px]">
          En WEBBERYL, creemos que cada idea tiene el potencial de despegar. Con
          nuestra pasión por el diseño y el desarrollo web,{" "}
          <span className="font-bold">
            estamos aquí para impulsar tu presencia al siguiente nivel.
          </span>
        </p>
        <button className="animated-button" onClick={handleRedirect}>
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Agendar cita</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default MainPage;
