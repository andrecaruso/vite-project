import Header from "./components/Header";
import imagem from "./assets/react-core-concepts.png";
import Examples from  "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

function App() {
 

  return (
    <>
      <Header imagem={imagem} />
      <main>
        <CoreConcepts />
        <Examples />     
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
