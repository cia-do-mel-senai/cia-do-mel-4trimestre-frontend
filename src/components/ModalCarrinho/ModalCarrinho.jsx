import "./ModalCarrinho.css";

export default function ModalCarrinho({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-glass">
        <button className="modal-close" onClick={onClose}>X</button>
        <h1>Muito obrigada por escolher a <br /><i>Cia do Mel !</i></h1><br />
        <h2>Em instantes, nossa equipe entrará <br />em contato com você para finalizarmos <br />seu pagamento.</h2>
        <br />
        <p><i>
          Parabéns! Você acaba de adquirir mais saúde <br />para você e sua família !!!
        </i></p>
      </div>
    </div>
  );
}
