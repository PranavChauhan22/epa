import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Homesub from "./components/homesub/Homesub";
import Bodysec1 from "./components/bodysec1/Bodysec1";
import Card from "./components/cards/Card";
import Cards from "./components/cards/Cards";
import Bodysec2 from "./components/bodysec2/Bodysec2";
import Footer from "./components/footer/Footer";
import {HashRouter as Router, Switch, Route } from "react-router-dom";
import Homeroute from "./components/services/Homeroute";
import Services from "./components/services/Services";
import Navbar from "./components/services/Navbar";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <Router>
<div className="App">
       
        <Switch>
          <Route exact path="/" component={Homeroute} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
</div>

    </Router>
  );
}

export default App;
