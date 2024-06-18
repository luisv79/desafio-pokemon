import { NavLink } from "react-router-dom";
import IconoPikachu from '../assets/icono-pikachu.png'

export default function Navbar() {
const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");
return (
    
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid menu">
    <img className="navbar-brand icono-pikachu" src={IconoPikachu} alt="" />
    <ul className="nav justify-content-end">
  <li className="nav-item">
  <NavLink className={ setActiveClass } to="/">
Home
</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className={ setActiveClass } to="/personajes">
Personajes
</NavLink>
  </li>
  
</ul>
    
  </div>
</nav>
</div>
);
}
