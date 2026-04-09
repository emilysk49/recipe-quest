import logoImg from "../assets/logo.png";
import "./Home.css"

const Home = () => {
  return (
    <main className="home-container">
      <div className="hero-section">
        <img
          src={logoImg}
          alt="Recipe Quest Logo"
          className="img-fluid mb-4 hero-logo-custom"
          style={{ maxWidth: "400px" }}
        />
        <div className="search-pill-container">
          <input
            type="text"
            className="search-input-custom"
            placeholder="Coloque nome da receita ou ingredientes..."
          />
          <button type="submit" className="search-btn-round">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
