import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroCliente.css";
import { ToastContainer, toast } from "react-toastify";

const CadastroCliente = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const botaoCadastro = () => {
    if (
      nome.trim() === "" ||
      email.trim() === "" ||
      telefone.trim() === "" ||
      senha.trim() === "" ||
      confirmarSenha.trim() === ""
    ) {
      toast.dismiss();
      toast.error("Todos os campos são obrigatório");
      return;
    }

    if (senha.trim() !== confirmarSenha.trim()) {
      toast.dismiss();
      toast.error("As senhas não coincidem!");
      return;
    }

    const dadosCadastrados = {
      nome,
      email,
      telefone,
      senha,
    };
    console.log("Dados Cadastrados:", dadosCadastrados);
  };

  return (
    <div className="container-cadastro">
      <div className="Formulario-cadastro">
        <h2>Bem Vindo a Cia do Mel</h2>

        <label htmlFor="nome" className="cadastro-label">
          Nome:
        </label>
        <input
          type="text"
          placeholder="Nome"
          id="nome"
          className="cadastro-input"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />

        <label htmlFor="email" className="cadastro-label">
          E-mail:
        </label>
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          className="email-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="telefone" className="cadastro-label">
          Telefone:
        </label>
        <input
          type="tel"
          placeholder="Telefone"
          id="telefone"
          className="telefone-input"
          value={telefone}
          onChange={(e) => {
            setTelefone(e.target.value);
          }}
        />

        <label htmlFor="senha" className="cadastro-label">
          Senha:
        </label>
        <input
          type="password"
          placeholder="Senha"
          id="senha"
          className="senha-input"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />

        <label htmlFor="confirmarSenha" className="cadastro-label">
          Confirmar senha:
        </label>
        <input
          type="password"
          placeholder="Confirmar Senha"
          id="confirmarSenha"
          className="confimarSenha-input"
          value={confirmarSenha}
          onChange={(e) => {
            setConfirmarSenha(e.target.value);
          }}
        />
        <button className="botao-registar" onClick={botaoCadastro}>
          CADASTRAR
        </button>
        <p
          className="possuiConta"
          onClick={() => {
            navigate("/login-cliente");
          }}
        >
          Já possui uma conta?
        </p>
      </div>
      <div className="texto-parte-amarelo">
        <h1>A natureza nos dá o melhor, nós entregamos até você! </h1>
      </div>
      <ToastContainer position="top-center" limit={1}></ToastContainer>
    </div>
  );
};
export default CadastroCliente;
