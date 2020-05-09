import React, { Component } from "react";

class Sample extends Component {
  state = {
    myValue: 0
  };

  myMethod = () => {
    console.log("this is my method");
    console.log(this.state);
    this.setState({
      myValue: this.state.myValue + 1
    });
  }

  render() {
    return <div>
      <button onClick={this.myMethod}>Trigger Method</button>
      <p>The value is: {this.state.myValue}</p>
    </div>;
  }
}

export default Sample;
