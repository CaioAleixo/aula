import {useForm } from "react-hook-form";
import InputNome from "../components/InputNome";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormPerfil () {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit((data) => { })}> 
            <InputNome register={register} error={errors.nome} />
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
        </form>
    );

}