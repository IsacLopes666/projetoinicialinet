
import './App.css'
import MyComponent from './componentes/MyComponent.jsx'
import NewComponent from './componentes/NewComponent.jsx'
import OtherComponent from './componentes/OtherComponent.jsx'

function App() {

  return (
    <>
    <OtherComponent/>
    <NewComponent/>
    {/*Seu componente dever ser renderizado por aqui*/}
      <h1>Meu titulo</h1>
      <p>Loucos por velocidade</p>
      <MyComponent/>
    </>
  )
}

export default App
