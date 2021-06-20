import {ToastContainer} from 'react-toastify'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Video from "./pages/home/Videos";
import Registro from './pages/registro/Registro';
import Page404 from "./pages/404/Page.404";
import Navbar from "./layout/layoutBase/navbar/Navbar";
import Discord from './pages/Discord';


export default function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/discord" component={Discord} />
          <Route exact path="/" component={Video} />
          <Route exact path="/registro" component={Registro} />
          <Route  path="/video/:id" component={Registro} />
          <Route  path="*" component={Page404} />
        </Switch>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}
