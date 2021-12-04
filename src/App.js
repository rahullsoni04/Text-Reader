import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/InputText.js";
// import analysis from './components/Analyzer.js'

function App() {
  return (
    <>
      <Navbar tittle="Text Reader" />
      <div className="container">
        <TextArea header="Enter Text below" />
      </div>
    
    </>
  );
}

export default App;
