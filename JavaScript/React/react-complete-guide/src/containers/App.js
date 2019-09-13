import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Silandra", age: 18 },
      { id: "2", name: "Ajantis", age: 18 },
      { id: "3", name: "Imoen", age: 17 }
    ],
    otherState: "Some other value",
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>;
    }

    return (
      <div className={styles.App}>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work yet?"));
  }
}

export default App;
