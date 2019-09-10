import React, { Component } from 'react';
import './App.css';
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    username: "Purple Unicorn"
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserInput  username={this.state.username} changed={this.changeUsernameHandler}/>
        <UserOutput />
        <UserInput />
        <UserOutput />
        <UserInput />
        <ol>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
