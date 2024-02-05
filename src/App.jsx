import NavBar from "./components/layout/NavBar/NavBar";
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
