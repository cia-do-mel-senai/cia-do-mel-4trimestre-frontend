import "./LoginCliente.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./LoginCliente.css";

const LoginCliente = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const botaoCadastro = () => {
    if (email.trim() === "" || senha.trim() === "") {
      toast.dismiss();
      toast.error("Todos os campos são obrigatório");
      return;
    }
    if (email === "erick@gmail.com" && senha === "123") {
      navigate("/");
    } else "E-mail ou senha inválidos";
  };

  return (
    <div className="container-login">
      <div className="Formulario-login">
        <h2>Bem vindo de volta!</h2>

        <label htmlFor="email" className="login-label">
          E-mail:
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

        <label htmlFor="senha" className="cadastro-label">
          Senha:
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
        <button className="botao-entrar" onClick={botaoCadastro}>
          ENTRAR
        </button>
        <p
          className="possuiContaLogin"
          onClick={() => {
            navigate("/cadastro-cliente");
          }}
        >
          Não tem uma conta?
        </p>
      </div>
      <div className="texto-parte-amarelo-login">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="700"
          height="700"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10.039 21.5l-1.7-3h-3.3L3.076 15l1.7-3l-1.7-3l1.961-3.5h3.3l1.7-3h3.923l1.7 3h3.3L20.924 9l-1.7 3l1.7 3l-1.961 3.5h-3.3l-1.7 3zm5.623-10h2.726l1.39-2.5l-1.388-2.5h-2.727L14.248 9zm-5 3h2.676l1.414-2.5l-1.414-2.5h-2.676L9.248 12zm0-6h2.676l1.439-2.525L13.364 3.5h-2.728L9.224 5.975zm-5.026 3h2.702L9.753 9L8.338 6.5H5.637L4.223 9zm0 6h2.702L9.753 15l-1.414-2.5H5.613L4.223 15zm5 3h2.728l1.413-2.475l-1.438-2.525h-2.677l-1.439 2.525zm5.026-3h2.701l1.414-2.5l-1.413-2.5h-2.702L14.248 15z"
          />
        </svg>
        <h1>
          O sabor puro da natureza, <br />
          direto da colmeia para você!
        </h1>
      </div>
      <ToastContainer position="top-center" limit={1}></ToastContainer>
    </div>
  );
};

export default LoginCliente;
