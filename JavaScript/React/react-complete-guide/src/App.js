import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Silandra", age: 18 },
      { name: "Ajantis", age: 18 },
      { name: "Imoen", age: 17 }
    ],
    otherState: "Some other value"
  };

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = "Sil";
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: "Ajantis", age: 18 },
        { name: "Imoen", age: 17 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: "Ajantis", age: 18 },
        { name: "Imoen", age: 17 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This works!</p>
        <button onClick={() => this.switchNameHandler("Sil")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
        changed={this.nameChangeHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Ajantis!")}>My Hobbies: Helm, Fighting</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work yet?"));
  }
}

export default App;
