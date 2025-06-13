import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroCliente.css";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { criarUsuario } from "../../../services/servicoUsuario";

const CadastroCliente = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const botaoCadastro = async () => {
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

    const usuario = {
      nome,
      email,
      telefone,
      senha,
    };

    try {
      criarUsuario(usuario);
    } catch (error) {
      console.log(error);
    }

    console.log("Dados Cadastrados:", usuario);
  };

  return (
    <div className="container-cadastro">
      <div className="Formulario-cadastro">
        <div className="Formulario-arrow-back" onClick={() => navigate("/")}>
          <MdOutlineArrowBackIos />
        </div>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="0 0 32 32"
        >
          <g fill="#ffff00">
            <path d="M21.646 12.632s-.355-.987-1.408-.96c-.222.019-.919.253-.815 1.315v.011c.04.44.15 1.68 1.741 1.276c.638-.162.772-.879.482-1.642" />
            <path d="M21.5 4.002a2 2 0 0 1-1.727 1.982L19.517 7H25a1 1 0 0 1 .883 1.47c2.134 1.058 3.96 3.845 3.093 7.747l-.015.06l-3.748 12.994l-.004.013a2 2 0 0 1-.09.257a2.6 2.6 0 0 1-.319.559a2.2 2.2 0 0 1-1.8.9H9a2.2 2.2 0 0 1-1.8-.9a2.6 2.6 0 0 1-.41-.816l-.003-.013L3.04 16.277l-.015-.06c-.867-3.902.959-6.689 3.093-7.747A1 1 0 0 1 7 7h10.97l.35-1.383a2 2 0 1 1 3.18-1.614m-7.966 9.728a3.4 3.4 0 0 1-.592-.024a4.2 4.2 0 0 1-1.38-.441c-.97-.505-1.986-1.48-2.721-3.265H8c-1.271 0-3.891 1.812-3.03 5.754L5.33 17h21.34l.36-1.246C27.891 11.812 25.271 10 24 10h-1.28c-.465.599-1.161 1.183-2.139 1.225h-.01a2.4 2.4 0 0 1-.714-.045a2.74 2.74 0 0 1-1.428-.828l-.024-.02a1 1 0 0 0-.34-.168a.3.3 0 0 0-.06-.01a.3.3 0 0 0-.04.049c-.111.181-.203.402-.334.723l-.022.056c-.201.497-.497 1.229-1.128 1.797c-.687.62-1.636.944-2.94.95zM7.493 24.5l1.218 4.223l.004.015l.013.034a.6.6 0 0 0 .072.128c.051.068.093.1.2.1h14c.107 0 .149-.032.2-.1a.6.6 0 0 0 .085-.162l.004-.015l1.218-4.223zm10.523-14.354l-.004.003l.002-.001z" />
          </g>
        </svg>
        <h1>
          A natureza nos dá o melhor. <br />E nós levamos até você!{" "}
        </h1>
      </div>
      <ToastContainer position="top-center" limit={1}></ToastContainer>
    </div>
  );
};
export default CadastroCliente;
