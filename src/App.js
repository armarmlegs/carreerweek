import logo from './logo.svg';
import './App.css';
import NavMain from "./components/NavMain"
import Home from "./pages/Home"
import Temperature from "./pages/Temperature"
import Customize from "./pages/Customize.jsx"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/temperature" component={Temperature} />
      <Route exact path="/customize-image" component={Customize} />


      </Switch>

      
    </div>
  );
}

export default App;
