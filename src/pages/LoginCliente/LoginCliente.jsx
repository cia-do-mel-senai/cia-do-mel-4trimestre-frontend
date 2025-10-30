import "./LoginCliente.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./LoginCliente.css";
import { logarUsuario } from "../../services/servicoUsuario.js";
import { AuthContext } from "../../context/authContext.jsx";
import Header from "../../components/Header/Header.jsx";

const LoginCliente = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario) navigate("/estoque");
  }, [usuario, navigate]);

  const botaoLogin = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || senha.trim() === "") {
      toast.dismiss();
      toast.error("Todos os campos são obrigatório");
      return;
    }

    const usuario = {
      email: email,
      senha: senha,
    };

    try {
      const resposta = await logarUsuario(usuario);
      const token = resposta.data.token;

      login(token);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.erro);
    }
  };

  return (
    <div className="container-login">
      <Header />
      <div className="formulario-login-container">
        <form action="" className="formulario-login">
          <h2>Bem-vindo</h2>
          <small>Acesse sua conta</small>

          <div className="login-form-group">
            <label htmlFor="email" className="login-label">
              Email
            </label>
            <input
              type="text"
              placeholder="E-mail"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="senha" className="login-label">
              Senha
            </label>
            <input
              type="password"
              placeholder="Senha"
              id="senha"
              className="senhaLogin-input"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
          <button className="botao-entrar" onClick={botaoLogin}>
            ENTRAR
          </button>
          <p className="possuiContaLogin">
            Problemas com acesso?{" "}
            <span
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/watch?v=XfELJU1mRMg";
              }}
            >
              Contate-nos
            </span>
          </p>
        </form>
      </div>

      <ToastContainer position="top-center" limit={1}></ToastContainer>
    </div>
  );
};

export default LoginCliente;
