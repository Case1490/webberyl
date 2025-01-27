import { motion } from "framer-motion";

const ReasonsImportantWeb = () => {
  return (
    <div className="mt-28 mb-[200px] w-5/6 m-auto lg:w-auto">
      {/* Título animado desde la derecha */}
      <motion.h1
        className="text-4xl lg:text-6xl text-center text-PurpleMain font-bold w-[80%] m-auto leading-tight"
        initial={{ opacity: 0, x: 100 }} // Inicia fuera del viewport hacia la derecha
        whileInView={{ opacity: 1, x: 0 }} // Aparece en el viewport
        viewport={{ once: true, amount: 0.5 }} // Se anima una sola vez al estar en el 50% del viewport
        transition={{ duration: 0.8 }} // Duración de la animación
      >
        ¿Por qué es importante tener una página{" "}
        <span className="text-GreenLight">web</span>?
      </motion.h1>

      {/* Contenedor animado desde la izquierda */}
      <motion.div
        className="flex flex-col items-center my-10"
        initial={{ opacity: 0, x: -100 }} // Inicia fuera del viewport hacia la izquierda
        whileInView={{ opacity: 1, x: 0 }} // Aparece en el viewport
        viewport={{ once: true, amount: 0.5 }} // Se anima una sola vez al estar en el 50% del viewport
        transition={{ duration: 0.8, delay: 0.3 }} // Duración de la animación con retraso
      >
        <div className="space-y-4 lg:space-y-2">
          <h1 className="font-bold text-xl">
            🟢 Visibilidad 24/7:{" "}
            <span className="font-normal">
              Permite que tu negocio esté accesible en cualquier momento,
              atrayendo nuevos clientes.
            </span>
          </h1>
          <h1 className="font-bold text-xl">
            🟢 Credibilidad:{" "}
            <span className="font-normal">
              Establece confianza y profesionalismo ante los consumidores.
            </span>
          </h1>
          <h1 className="font-bold text-xl">
            🟢 Información sobre productos y servicios:{" "}
            <span className="font-normal">
              Facilita la presentación de lo que ofreces de manera clara y
              accesible.
            </span>
          </h1>
          <h1 className="font-bold text-xl">
            🟢 Generación de leads:{" "}
            <span className="font-normal">
              Ayuda a convertir visitantes en clientes potenciales mediante
              llamados a la acción.
            </span>
          </h1>
          <h1 className="font-bold text-xl">
            🟢 Crecimiento empresarial:{" "}
            <span className="font-normal">
              Contribuye al éxito y expansión de tu negocio en el mundo digital.
            </span>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default ReasonsImportantWeb;
