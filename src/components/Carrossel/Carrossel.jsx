import { useEffect, useState } from "react";

import "./Carrossel.css";

const Carrossel = () => {
  const imagensCarrossel = [
    {
      id: 1,
      image: "./public/Group-58.png",
    },
    {
      id: 2,
      image: "./public/Rectangle-46.png",
    },
    {
      id: 3,
      image: "./public/Group-57.png",
    },
  ];

  const [indiceAtual, setindiceAtual] = useState(0);

  const proximoSlide = () => {
    setindiceAtual(
      (indiceAnterior) => (indiceAnterior + 1) % imagensCarrossel.length
    );
  };

  const slideAnterior = () => {
    setindiceAtual(
      (indiceAnterior) =>
        (indiceAnterior - 1 + imagensCarrossel.length) % imagensCarrossel.length
    );
  };
  useEffect(() => {
    const intervalo = setInterval(proximoSlide, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrossel">
      <div className="carrossel-container">
        <button className="botaoEsquerdo" onClick={slideAnterior}>
          ❮
        </button>
        <div className="slide">
          <img
            src={imagensCarrossel[indiceAtual].image}
            alt={`Slide ${indiceAtual + 1}`}
          />
        </div>
        <button className="botaoDireito" onClick={proximoSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
