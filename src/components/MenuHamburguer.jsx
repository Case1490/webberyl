const MenuHamburguer = ({ isOpen }) => {
  return (
    <div className="menu-activador">
      <label className={`menu-label ${isOpen ? "open" : ""}`}>
        <span className="menu-activador-linea"></span>
        <span className="menu-activador-linea"></span>
        <span className="menu-activador-linea"></span>
      </label>
    </div>
  );
};

export default MenuHamburguer;
