import { motion } from "framer-motion";
import AboutImage from "../images/nosotros2.png";
import Com from "../images/com.png";

const AboutUs = () => {
  return (
    <div id="nosotros">
      {/* Primer contenedor hijo con animaciones */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -100 }} // Posición inicial fuera de la vista
        whileInView={{ opacity: 1, x: 0 }} // Animación de entrada
        viewport={{ once: true, amount: 0.5 }} // Solo se anima una vez
        transition={{ duration: 0.8, ease: "easeOut" }} // Configuración de transición
      >
        {/* Primera imagen */}
        <motion.div
          className="absolute w-0 lg:z-[80] lg:top-[-240px] lg:left-[-100px] lg:w-[600px]"
          initial={{ opacity: 0 }} // Inicialmente invisible
          animate={{ opacity: 1 }} // Aparece
          transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
        >
          <img src={AboutImage} alt="Foco" />
        </motion.div>

        {/* Segunda imagen con retraso */}
        <motion.div
          className="absolute w-0 lg:top-[120px] lg:left-[230px] lg:w-[320px]"
          initial={{ opacity: 0, y: 50 }} // Inicialmente invisible y desplazada
          animate={{ opacity: 1, y: 0 }} // Animación de entrada
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} // Retraso de 1 segundo
        >
          <img src={Com} alt="Com" />
        </motion.div>
      </motion.div>
      {/* Segundo contenedor hijo */}
      <motion.div
        className="w-5/6 m-auto text-center lg:text-left pt-4 lg:pt-0 space-y-8 lg:space-y-0 lg:w-1/2 lg:h-[450px] flex flex-col lg:flex-row items-center lg:float-right"
        initial={{ opacity: 0, x: 100 }} // Posición inicial fuera de la vista
        whileInView={{ opacity: 1, x: 0 }} // Animación de entrada
        viewport={{ once: true, amount: 0.5 }} // Solo se anima una vez
        transition={{ duration: 0.8, ease: "easeOut" }} // Configuración de transición
      >
        <div className="space-y-4 lg:pr-16">
          <h1 className="text-4xl md:text-6xl font-bold text-PurpleMain">
            Nosotros
          </h1>
          <p>
            Nos especializamos en{" "}
            <b>ayudar a emprendedores y pequeñas empresas</b> a establecer su
            presencia en línea a través del diseño de páginas{" "}
            <span className="text-PurpleMain font-bold">
              web atractivas y funcionales.
            </span>
          </p>
          <p>
            Nos consideramos tu aliado estratégico, ofreciendo{" "}
            <span className="text-PurpleMain font-bold">
              soluciones personalizadas que se adaptan a tus necesidades
              específicas.
            </span>
          </p>
          <p>
            <b>Nuestro compromiso</b> es crear sitios web que no solo reflejen
            la identidad de tu marca, sino que también impulsen tu crecimiento
            en el mundo digital.{" "}
            <span className="text-PurpleMain font-bold">
              Trabajemos juntos para llevar tu negocio al siguiente nivel.
            </span>
          </p>
        </div>
        <div className="w-[300px] lg:hidden">
          <img src={AboutImage} alt="AboutUs" />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
