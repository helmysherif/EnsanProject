import React , {Component} from 'react';
import Causes from "./../Causes";
import Contact from "./../Contact";
import Fund from "./../Fund";
import News from "./../News";
import Partners from "./../Partners";
import People from "./../People";
import Services from "./../Services";
import Volunteer from "./../Volunteer";
import Navbar from "./../Navbar";
import Slider from "./../slider";
class Index extends Component {
  render(){
    return (
      <div className="App">
        <Slider />
        <Navbar />
        <Services />
        <Fund />
        <Volunteer />
        <Causes />
        <People />
        <Contact />
        <News />
        <Partners />
      </div>
    );
  }
}
export default Index;