import {useState} from 'react'
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // futuramente integração com backend
  }

  return (
    <div className='register-page'>
      <div className="card-glass register">
        <h2>Criar Conta</h2>
        <p className="register-subtitle">Comece sua jornada no Recipe Quest!</p>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group-custom">
            <label>Nome</label>
            <input type="text" placeholder='Seu nome' onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="input-group-custom">
            <label>Email</label>
            <input type="text" placeholder='Seu e-mail' onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="input-group-custom">
            <label>Senha</label>
            <input type="text" placeholder='Crie uma senha' onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>
          <button className="btn-register-submit">Finalizar Cadastro</button>
        </form>
      </div>
    </div>
  );
}

export default Register;