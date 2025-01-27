import { useState, useEffect, useRef } from "react";
import ResponsiveImage from "../images/responsiveMobile.png";

const MobileWeb = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Se activa cuando el 20% del componente es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-5/6 m-auto relative">
      {/* Imagen con animación de opacidad */}
      <div
        className={`absolute left-[54%] transform -translate-x-1/2 w-[470px] sm:w-[900px] top-[-60px] sm:top-[-80px] md:top-[-140px] ${
          isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
      >
        <img src={ResponsiveImage} alt="laptop" />
      </div>

      {/* Contenedor con animación desde abajo */}
      <div
        className={`text-center space-y-4 pt-[120px] md:pt-[200px] lg:pt-[300px] ${
          isVisible ? "opacity-100 animate-slideUp" : "opacity-0"
        }`}
      >
        <h3 className="text-2xl text-white">
          Diseño compatible con distintas pantallas
        </h3>
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          ¿Tu Sitio Web es Amigable con Móviles?
        </h1>
        <p className="text-white w-[95%] sm:w-3/4 m-auto">
          Un diseño web responsive es crucial porque{" "}
          <span className="font-bold">
            asegura que tu sitio se vea y funcione bien en cualquier
            dispositivo,
          </span>{" "}
          ya sea un ordenador, tablet o smartphone. Esto mejora la experiencia
          del usuario, reduce las tasas de rebote y aumenta la posibilidad de
          conversión.
        </p>
      </div>
    </div>
  );
};

export default MobileWeb;
