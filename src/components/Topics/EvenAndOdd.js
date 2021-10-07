import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  evenOddSolver = () => {
    let arr = this.state.userInput.split(",");
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i] % 2 === 0) {
        this.state.evenArray.push(+arr[i]);
      } else {
        this.state.oddArray.push(+arr[i]);
      }
    }
    
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4 value="Evens and Odds">Evens and Odds</h4>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button
          className="confirmationButton"
          onClick={this.evenOddSolver}
        >Split</button>
        <span className="resultsBox" value={this.state.evenArray}>
          Evens: [{this.state.evenArray.toString()}]
        </span>
        <span className="resultsBox" value={this.state.oddArray}>
          Odds: [{this.state.oddArray.toString()}]
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
