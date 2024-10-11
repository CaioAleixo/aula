import { useContext } from "react";
import { TarefaContext } from "../contexts/TarefaContexts";

function ListTarefa () {
    const {tarefas, remover} = useContext (TarefaContext);

    return (
        <ul>{tarefas.map((item, index) => (
            <li key={index}>{item} <button onClick={() => remover(item)}>Remover</button></li>
        ))}
        </ul>
    );
}

export default ListTarefa;