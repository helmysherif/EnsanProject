import React , {Component} from 'react';
import Navbar from "./../Navbar";
import Content from "./../Content";
class Index extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Content />
      </div>
    );
  }
}
export default Index;
