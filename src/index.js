import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'
import store from "./state/store"

// import * as serviceWorker from "./serviceWorker"


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"))