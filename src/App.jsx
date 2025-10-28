import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import imagem from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import { useState } from "react";
import {EXAMPLES} from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header imagem={imagem} />
      <main>
        <section id="core-concepts">
          <h2>Conceitos chave</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick("state")}>States</TabButton>
          </menu>
         {!selectedTopic ? <p>Please select a topic.</p> : null }
         {selectedTopic ? (
         <div id="tab-content">
            <h3>
              {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
              {EXAMPLES[selectedTopic].description} 
            </p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
          </div> ) : null}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
