import Icone from "./Icone";
import InputPesquisar from "./InputPesquisar";
import Titulo from "./Titulo";
import "./Cabecalho.css";

function Cabecalho () {
    return (
        <header>
            <div>
                <Icone imagem="" texto="Logo da Aplicação" />
                <Titulo texto="Aluno Online" />
            </div>
            <div>
                <InputPesquisar />
                <Icone imagem="" texto="Icone Pesquisar" />
            </div>
        </header>
    );
}

export default Cabecalho;