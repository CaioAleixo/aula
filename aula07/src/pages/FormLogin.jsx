import { useForm } from "react-hook-form";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function FormLogin () {
    const {register, handleSubmit, formState: {errors}} = useForm ();

    return (
        <form onSubmit={handleSubmit((data) => { })}>
            <InputEmail register = {register} error = {errors.email}/>
            <InputSenha register = {register} error = {errors.senha}/>
            <Botao texto="Entrar" />
        </form>
    );
}

export default FormLogin;