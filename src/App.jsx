import "./App.css";
import NavBar from "./components/page/NavBar/NavBar";
import ItemListContainer from "./components/page/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Hola este es mi sitio web!!" />
    </>
  );
}

export default App;
