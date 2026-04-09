import "./Navbar.css"
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
                <li><a href="/explore">Explorar</a></li>
                <li><a href="/favoritos">Favoritos</a></li>
            </ul>
        </div>

        <span className="nav-separator"></span>
        
        <div className="nav-auth">
            <a href="/login" className="btn-login">Login</a>
            <a href="/cadastro" className="btn-signup">Cadastrar</a>
        </div>
        
      </nav>
    );
}

export default Navbar;