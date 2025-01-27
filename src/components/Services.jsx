import { motion } from "framer-motion";
import CardService from "./CardService";

// IMPORTANDO ICONOS
import Icono1 from "../images/icono-diseñoProfesional.png";
import Icono2 from "../images/icono-tiendasVirtuales.png";
import Icono3 from "../images/icono-posicionamiento.png";
import Icono4 from "../images/icono-optimizaciónWeb.png";

const Services = () => {
  const data = [
    {
      image: Icono1,
      title: "Diseño Profesional",
      paragraph:
        "Creamos sitios web atractivos y funcionales, adaptados a las necesidades de tu marca. Nuestro enfoque se centra en la estética y la usabilidad, asegurando que cada elemento del diseño contribuya a una experiencia de usuario óptima.",
    },
    {
      image: Icono2,
      title: "Tiendas Virtuales",
      paragraph:
        "Desarrollamos tiendas en línea personalizadas que permiten a tu negocio vender productos y servicios de manera efectiva. Nos encargamos de la integración de sistemas de pago seguros y una interfaz intuitiva para facilitar la compra apoyada con carrito de compra.",
    },
    {
      image: Icono3,
      title: "Posicionamiento SEO",
      paragraph:
        "Implementamos estrategias de optimización para mejorar la visibilidad de tu sitio web en los motores de búsqueda. Esto incluye la investigación de palabras clave, la creación de contenido relevante y la optimización técnica del sitio para atraer tráfico orgánico.",
    },
    {
      image: Icono4,
      title: "Optimización Web",
      paragraph:
        "Mejoramos el rendimiento de tu sitio web para garantizar tiempos de carga rápidos y una navegación fluida. Esto incluye ajustes técnicos y la implementación de prácticas recomendadas para asegurar que tu sitio funcione sin problemas en todos los dispositivos.",
    },
  ];

  return (
    <div className="mt-28 w-5/6 lg:w-3/4 m-auto text-center" id="servicios">
      {/* Título animado */}
      <motion.h1
        className="text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl py-2 px-4 rounded-full text-white font-bold bg-PurpleMain inline-block md:w-[80%] m-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Nuestros Servicios
      </motion.h1>

      {/* Contenedor de tarjetas animado */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {data.map((dat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4 }}
          >
            <CardService
              image={dat.image}
              title={dat.title}
              paragraph={dat.paragraph}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
