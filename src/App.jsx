import BotaoUsuario from './components/BotaoUsuario'
import './App.css'

function App() {

  return (
    <>
      <BotaoUsuario logado={false}/>
      <br/> <br/>
      <BotaoUsuario logado={true}/>
    </>
  )
}

export default App
