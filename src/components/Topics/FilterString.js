import React, { Component } from "react";

class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unFilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy",
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  filterS = () => {
    let wordInput = this.state.userInput;
    let filteredArray = [];
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
      if (this.state.unFilteredArray[i] === wordInput) {
        filteredArray.push(this.state.unFilteredArray[i]);
      }
    }

    this.setState({
      filteredArray: filteredArray,
    });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4 value="Filter String">Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.filterS}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
