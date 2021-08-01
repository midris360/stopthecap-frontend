import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import { App } from "./components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppState } from "./AppState.jsx";
<<<<<<< HEAD
import "materialize-css/dist/css/materialize.min.css";
=======
>>>>>>> 50a49bdb4077b1179cae7d11dfff58bc96ccb879

ReactDom.render(
    <AppState>
        <Router>
           <Route path="/" component={App}/>
        </Router>
    </AppState>, 
    document.querySelector("#root")
);
