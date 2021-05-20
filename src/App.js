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
        Solve quickly using <strong>Gauss</strong>. View every step with{" "}
        <strong>LaTeX</strong>. Test equation: 5x+2y+1z=3
      </p>
      <br />
      <InputView />
    </div>
  );
}

export default App;
