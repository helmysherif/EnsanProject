import React , {Component} from 'react';
import Navbar from "./../../Services/Navbar";
import Image from "../Image";
import About from "../About";
import Trusted from "../Trusted";
import Icons from "../Icons";
class Index extends Component {
  render(){
    return (
        <div className="App">
            <Navbar />
            <Image />
            <About />
            <Trusted />
            <Icons />
        </div>
    );
  }
}
export default Index;
