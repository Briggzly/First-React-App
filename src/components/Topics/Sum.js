import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  addNums = () => {
    let num1 = +this.state.number1;
    let num2 = +this.state.number2;
    let sum = +num1 + num2

    this.setState({
      sum: sum,
    })
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          placeholder='Number 1'
          onChange={(event) => this.setState({ number1: event.target.value })}
        />
        <input
          className="inputLine"
          placeholder='Number 2'
          onChange={(event) => this.setState({ number2: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.addNums}>
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
