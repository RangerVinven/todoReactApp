//import 'bootstrap/dist/css/bootstrap.css';

import React from "react";
import ReactDom from "react-dom";
import TodoContainer from "./components/TodoContainer";

ReactDom.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
);