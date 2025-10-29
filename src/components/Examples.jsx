import { useState } from "react";
import {EXAMPLES} from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
    }

  return (
    <Section title="Examples" id="examples">
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
        </Section>
  );
}