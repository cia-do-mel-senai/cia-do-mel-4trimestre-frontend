import CardProduto from "../../components/CardProduto/CardProduto";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Catalogo.css";

export default function Catalogo() {
    return (
        <div className='catalogo-container'
        >
            <Header />
            <div className="catalogo-content">
                <div className="catalogo-body">
                    <div className="catalogo-filtros">
                    <select name="" id="">
                        <option value="">categorias</option>
                        </select>
                        <select name="" id="">
                            <option value="">filtro</option>
                        </select>
                        </div>
                        <div className="catalogo-produtos">
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>
            <CardProduto imagem={"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/07/propriedades-do-mel-1.jpg"} nome={"Mel"} preco={19.999}/>

                        </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
