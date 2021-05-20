import React from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "./katex.min.css";

function Display(props) {
  if (props.input === "") {
    props.input = "Ax+By+Cz=D";
  }
  return (
    <Markdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      children={props.input}
    />
  );
}

export default Display;
