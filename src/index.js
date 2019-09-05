import React from "react";
import ReactDOM from "react-dom";
import './style.css'

const App = () => {
  return <div className="helloworld">Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));