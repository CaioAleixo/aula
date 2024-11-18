function InputSenha (props) {
    const regras = { 
        required: 'Senha é obrigatória',
        minLength: {
          value: 6,
          message: 'A senha deve ter pelo menos 6 caracteres'
        }
      }
    {props.error && <p>{props.error.message}</p>} 
    return (
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" {...props.register("senha", regras)}/>
        </>
    );
}

export default InputSenha;