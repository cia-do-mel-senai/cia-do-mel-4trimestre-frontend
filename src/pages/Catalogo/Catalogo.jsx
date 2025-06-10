import CardProduto from "../../components/CardProduto/CardProduto";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Catalogo.css";

export default function Catalogo() {
  return (
    <div className="catalogo-container">
      <Header />
      <div className="catalogo-content">
         <div className="catalogo-filtros">
            <select name="categaroia" id="categoria">
              <option value="">Categorias</option>
              <option value="todasCategorias">Todas as Categorias</option>
              <option value="alimentos">Alimentos</option>
              <option value="cuidadosSaude">Cuidados com a Saúde</option>
              <option value="belezaHigiene">Beleza e Higiene</option>
              <option value="produtosNaturais">Produtos Naturais</option>
            </select>
            <select name="filtro" id="filtro">
              <option value="">Filtro</option>
              <option value="menorPreco">Menor Preço</option>
              <option value="maiorPreco">Maior Preço</option>
              <option value="nomeAZ">Nome A-Z</option>
              <option value="nomeZA">Nome Z-A</option>
            </select>
          </div>
        
        <div className="catalogo-body">
         <div className="catalogo-produtos">
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2019/09/mel-puro-onde-comprar-sp-38-510x510.jpg"
              }
              nome={"Mel Jatai"}
              preco={29.999}
            />
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2021/11/favo-de-mel-sp-madeira.jpg"
              }
              nome={"Favo de Mel"}
              preco={54.9}
            />
            <CardProduto
              imagem={
                "https://http2.mlstatic.com/D_NQ_NP_2X_636271-MLB79612377778_102024-F-bebida-hidromel-ferroada-suave-750ml-original-viking.webp"
              }
              nome={"Hidromel"}
              preco={99.9}
            />
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2020/03/propolis-verde-marrom-vermelho-beneficios-onde-comprar-concentrado-extrato-alcool-1.jpg"
              }
              nome={"Própolis"}
              preco={34.9}
            />
            <CardProduto
              imagem={
                "https://img.freepik.com/premium-photo/immerse-yourself-in-the-mesmerizing-magic-of-beeswax-and-uncover-its-extensive-range-of-uses-beeswax-meticulously-created-by-bees-generated-by-ai_727385-4134.jpg"
              }
              nome={"Cera Filtrada"}
              preco={130.9}
            />
            <CardProduto
              imagem={
                "https://img.elo7.com.br/product/zoom/48DEFF0/sabonete-glicerinado-artesanal-camomila-mel-100g-cuidado-com-a-pele.jpg"
              }
              nome={"Sabonete"}
              preco={19.99}
            />
            <CardProduto
              imagem={
                "https://images.tcdn.com.br/img/img_prod/832872/vinagre_de_mel_557_1_ffd44acc0b20004ac62a4362ed36e861.jpeg"
              }
              nome={"Vinagre"}
              preco={30.99}
            />
            <CardProduto
              imagem={
                "https://tse4.mm.bing.net/th/id/OIP.RC0ukPn4tS3UWeWGBlrDQgHaLH?r=0&pid=ImgDet&w=191&h=286&c=7"
              }
              nome={"Vela de Cera"}
              preco={25.99}
            />
            <CardProduto
              imagem={
                "https://guiadopiscicultor.com.br/wp-content/uploads/2025/02/Pote-de-mel-de-cacau-natural-em-uma-mesa-rustica-de-madeira.png"
              }
              nome={"Mel de Cacau"}
              preco={48.999}
            />
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2019/09/mel-puro-onde-comprar-sp-38-510x510.jpg"
              }
              nome={"Mel Jatai"}
              preco={29.999}
            />
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2021/11/favo-de-mel-sp-madeira.jpg"
              }
              nome={"Favo de Mel"}
              preco={54.9}
            />
            <CardProduto
              imagem={
                "https://http2.mlstatic.com/D_NQ_NP_2X_636271-MLB79612377778_102024-F-bebida-hidromel-ferroada-suave-750ml-original-viking.webp"
              }
              nome={"Hidromel"}
              preco={99.9}
            />
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2020/03/propolis-verde-marrom-vermelho-beneficios-onde-comprar-concentrado-extrato-alcool-1.jpg"
              }
              nome={"Própolis"}
              preco={34.9}
            />
            <CardProduto
              imagem={
                "https://img.freepik.com/premium-photo/immerse-yourself-in-the-mesmerizing-magic-of-beeswax-and-uncover-its-extensive-range-of-uses-beeswax-meticulously-created-by-bees-generated-by-ai_727385-4134.jpg"
              }
              nome={"Cera Filtrada"}
              preco={130.9}
            />
            <CardProduto
              imagem={
                "https://img.elo7.com.br/product/zoom/48DEFF0/sabonete-glicerinado-artesanal-camomila-mel-100g-cuidado-com-a-pele.jpg"
              }
              nome={"Sabonete"}
              preco={19.99}
            />
            <CardProduto
              imagem={
                "https://images.tcdn.com.br/img/img_prod/832872/vinagre_de_mel_557_1_ffd44acc0b20004ac62a4362ed36e861.jpeg"
              }
              nome={"Vinagre"}
              preco={30.99}
            />
            <CardProduto
              imagem={
                "https://tse4.mm.bing.net/th/id/OIP.RC0ukPn4tS3UWeWGBlrDQgHaLH?r=0&pid=ImgDet&w=191&h=286&c=7"
              }
              nome={"Vela de Cera"}
              preco={25.99}
            />
            <CardProduto
              imagem={
                "https://guiadopiscicultor.com.br/wp-content/uploads/2025/02/Pote-de-mel-de-cacau-natural-em-uma-mesa-rustica-de-madeira.png"
              }
              nome={"Mel de Cacau"}
              preco={48.999}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
