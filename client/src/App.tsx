import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Video from "./pages/home/Videos";
import Registro from "./pages/registro/Registro";
import Page404 from "./pages/404/Page.404";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Video} />
          <Route exact path="/registro" component={Registro} />
          <Route  path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
