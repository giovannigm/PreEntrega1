import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/prop/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greetings='Hola este es mi sitio web!!' />
    </>
  )
}

export default App
