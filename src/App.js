import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import DetailsPage from "../src/pages/DetailsPage";
import Example from "../src/pages/Examples";
import Checkout from "../src/pages/Checkout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
