import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./Carrossel.css";

const Carrossel = () => {
  const imagensCarrossel = [
    {
      id: 1,
      image:
        "https://thumbs.dreamstime.com/z/uma-fazenda-de-abelhas-nas-montanhas-abkhaz-apicultura-%C3%A9-antiga-arte-preservada-e-desenvolvida-em-muitas-partes-do-mundo-um-276110127.jpg",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3IZsj67P_-GfH3ThnERuIDOzY_hGJtuM_g&s",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2020/07/24/08/41/beer-5433299_1280.jpg",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2020/07/24/08/41/beer-5433299_1280.jpg",
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
