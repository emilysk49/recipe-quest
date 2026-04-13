import "./Navbar.css"
import {Link} from 'react-router-dom'
import logoImg from "../assets/logo.png"

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-left">
            <div className="nav-logo">
            <img
                src={logoImg}
                alt="Recipe Quest Logo"
                className="logo-image"
            />
            </div>
            <ul className="nav-links">
                <li><Link to="/explore">Explorar</Link></li>
                <li><Link to="/favorites">Favoritos</Link></li>
            </ul>
        </div>

        <span className="nav-separator"></span>
        
        <div className="nav-auth">
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/register" className="btn-signup">Cadastrar</Link>
        </div>
        
      </nav>
    );
}

export default Navbar;