function BotaoUsuario(props){

    return props.logado? <button id="botao" type="button">Sair</button> : <button id="botao" type="button">Entrar</button>

}

export default BotaoUsuario