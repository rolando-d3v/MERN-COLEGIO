import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Video from "./pages/home/Videos";
import Registro from "./pages/registro/Registro";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Video} />
          <Route exact path="/registro" component={Registro} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
