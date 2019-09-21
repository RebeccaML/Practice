import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "1", name: "Silandra", age: 18 },
      { id: "2", name: "Ajantis", age: 18 },
      { id: "3", name: "Imoen", age: 17 }
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  } 

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter+1
      };
    });
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
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false});
      }}>Remove Cockpit</button>
      {this.state.showCockpit ?
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler} /> : null};
        {persons}
      </Aux>
    );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work yet?"));
  }
}

export default withClass(App, styles.App);
