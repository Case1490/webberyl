const MenuDisplay = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`absolute top-[85px] w-full h-[400px] navbar-blurResponsive text-white transform transition-all duration-500 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-[400px] opacity-0"
      }`}
    >
      <ul className="flex flex-col items-center justify-around h-full text-xl">
        <li>
          <a href="#nosotros" onClick={closeMenu}>
            Nosotros
          </a>
        </li>
        <li>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
        </li>
        <li>
          <a href="#contacto" onClick={closeMenu}>
            Contáctanos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDisplay;
