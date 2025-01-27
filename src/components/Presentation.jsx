import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <motion.div
      className="py-2 md:py-10 flex items-center justify-center mt-0 md:mt-20 mb-32"
      initial={{ y: 50, opacity: 0 }} // Posición inicial (abajo y opacidad 0)
      whileInView={{ y: 0, opacity: 1 }} // Cuando entra en el viewport
      viewport={{ once: true, amount: 0.5 }} // Ejecuta solo una vez y cuando el 50% del contenedor es visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
    >
      <div className="text-center w-5/6 md:w-1/2 m-auto space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-PurpleMain">
          ¡Hola Bienvenid@! 😊
        </h1>
        <p>
          En nuestro equipo, nos apasiona ayudar a las empresas a impulsar su
          presencia en línea a través de diseños web atractivos y funcionales.
          ¡Explora nuestros servicios y comencemos esta emocionante aventura
          digital!
        </p>
      </div>
    </motion.div>
  );
};

export default Presentation;
