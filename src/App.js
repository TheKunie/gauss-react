import logo from "./logo.svg";
import "./assets/css/App.css";
import Navbar from "./components/navbar/Navbar.js";

import InputView from "./components/inputView/inputView";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "./components/display/katex.min.css";
import factorExtractor from "./components/factorExtractor/factorExtract";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <br />
      <br />
      <h1 className="display-3" id="h1">
        Gauss
      </h1>
      <p className="lead">
        Ràpid utilitzant el mètode de <strong>Gauss</strong>. Visual mitjançant {" "}
        <strong>KaTeX</strong>.
      </p>
      <br />
      <InputView />
    </div>
  );
}

export default App;
