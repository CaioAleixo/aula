function InputNome (props) {
    const regras = { 
        required: 'Nome é obrigatório',
        minLength: {
          value: 2,
          message: 'O nome deve ter pelo menos 2 caracteres'
        },
        maxLength: {
          value: 100,
          message: 'O nome deve ter até 100 caracteres'
        }
      }
    {props.error && <p>{props.error.message}</p>} 
    return (
        <>
            <label htmlFor="nome">Nome</label>
            <input type="text" {...props.register("nome", regras)} />
        </>
    );
}

export default InputNome;