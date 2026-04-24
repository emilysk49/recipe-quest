import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="card-glass login">
        <h2>Bem-vindo de volta!</h2>
        <p className="login-subtitle">Continue sua jornada no Recipe Quest</p>
        <form className="login-form">
          <div className="input-login">
            <label>E-mail</label>
            <input type="text" placeholder="Seu email" />
          </div>
          <div className="input-login">
            <label>Senha</label>
            <input type="text" placeholder="Sua senha" />
          </div>
          <button className="btn-login-submit">Login</button>
        </form>
        <Link to="/register">
          <p className="to-register">Não tem uma conta? Cadastre-se</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;