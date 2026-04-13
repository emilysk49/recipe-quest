import logoImg from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Home = () => {

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault()
    // aqui capturara valor do input mais tarde
    navigate('/explore')
  }

  return (
    <main className="home-container">
      <div className="hero-section">
        <img
          src={logoImg}
          alt="Recipe Quest Logo"
          className="img-fluid mb-4 hero-logo-custom"
          style={{ maxWidth: "400px" }}
        />
        <form className="search-pill-container" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input-custom"
            placeholder="Coloque nome da receita ou ingredientes..."
          />
          <button type="submit" className="search-btn-round">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Home;
