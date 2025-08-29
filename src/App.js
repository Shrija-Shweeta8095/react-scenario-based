import './App.css';
import AccessDOMElement from './scenarios/AccessDOMElement';
import ScenarioThreeParent from './scenarios/ChildParent/ScenarioThreeParent';
import ScenarioOne from './scenarios/DynamicHTMLData/ScenarioOne';
import Parent from './scenarios/ParentChild/Parent';

function App() {
  return (
    <div className="App">
      {/* display dynamic html data in react */}
      <ScenarioOne/> 

      {/* send data from parent component to child component in react ? */}
      <Parent/>

      {/* call parent component method from child component in react */}
      <ScenarioThreeParent/>

      {/* access the dom element */}
      <AccessDOMElement/>
    </div>
  );
}

export default App;
