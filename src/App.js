import React , {Component} from 'react';
import { BrowserRouter , Route } from "react-router-dom"
import Index from "./components/Homepage/Index";
import Index2 from "./components/Services/Index";
import Index3 from "./components/Partners/Index";
import Index4 from "./components/Volunteer/Index";
import Index5 from "./components/AboutUs/Index";
import Footer from "./components/Homepage/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter className="App">
        <Route exact path = "/" component = {Index} />
        <Route path = "/Services" component = {Index2} />
        <Route path = "/Partners" component = {Index3} />
        <Route path = "/Volunteers" component = {Index4} />
        <Route path = "/AboutUs" component = {Index5} />
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
