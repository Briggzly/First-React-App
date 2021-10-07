import React, { Component } from "react";

class Palindrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  filterP = () => {
    let word = this.state.userInput;
    let wordSplit = word.split('')
    let wordSplitR = word.split('').reverse()
    let answer = ''

    for(let i = 0; i < wordSplit.length; i++){
      for(let j = 0; j < wordSplitR.length; j++){
        if(wordSplit[i] === wordSplitR[j]){
          answer = 'True' 
        } else {
           answer = 'False'
        }
      }
    }
    
    this.setState({
      palindrome: answer,
    })

  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4 value="Palindrome">Palindrome</h4>
        <span className="puzzleText">

        </span>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.filterP}>
          Check
        </button>
        <span className="resultsBox">
          Palindrome: {this.state.palindrome}
        </span>
      </div>
    );
  }
}

export default Palindrome;