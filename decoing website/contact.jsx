\import React from "react";
import ReactDOM from "react-dom";

const name = "codeXboy"
const img ="https://picsum.photos/id/237/200/300"

ReactDOM.render(
    <>
    <h1> my name is {name}</h1>
    <img src={img} alt="photo" />
    </>,
    document.getElementById("try")
)