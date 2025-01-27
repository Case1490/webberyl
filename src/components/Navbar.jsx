import { useState, useEffect } from "react";
import Logo from "../images/logo-blanco.png";
import MenuHamburguer from "./MenuHamburguer";
import MenuDisplay from "./MenuDisplay";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsClicked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleInit = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div
        className={`w-full z-[999] fixed transition-all duration-300 ${
          isScrolled ? "navbar-blur" : ""
        }`}
      >
        <div className="w-5/6 m-auto text-white flex items-center justify-between py-6">
          <div className="w-[230px]" onClick={handleInit}>
            <img src={Logo} alt="Logo" className="w-full cursor-pointer" />
          </div>
          <nav>
            <ul className="hidden lg:flex items-center gap-x-20 text-xl">
              <li className="borderLink">
                <a href="#nosotros">Nosotros</a>
              </li>
              <li className="borderLink">
                <a href="#servicios">Servicios</a>
              </li>
              <li className="borderLink">
                <a href="#contacto">Contáctanos</a>
              </li>
            </ul>
            <div onClick={handleClick}>
              <MenuHamburguer isOpen={isClicked} />
            </div>
          </nav>
        </div>
      </div>
      <MenuDisplay isOpen={isClicked} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;
