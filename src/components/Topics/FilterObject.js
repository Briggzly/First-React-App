import React, { Component } from "react";

class FilterObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unFilteredArray: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  filterF = () => {
    let wordInput = this.state.userInput;
    let filteredArray = [];
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
      if (wordInput in this.state.unFilteredArray[i]) {
        filteredArray.push(this.state.unFilteredArray[i]);
      }
    }

    this.setState({
      filteredArray: filteredArray,
    });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4 value="Filter Object">Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.filterF}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
