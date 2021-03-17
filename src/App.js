import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import TODOList from "./TODOList";

function App() {
  return (
    <div className="container">
      <ClassComponent type="Class Component" />
      <FunctionalComponent type="Functional Component" />
      <br />
      <br />
      <br />
      <div className="container">
        <div style={{fontWeight:"bold"}}>TODO Application</div>
        <TODOList />
      </div>
    </div>
  );
}

export default App;
