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
    const style = {
      width: "50%",
      margin: "20px auto",
      textAlign: "center",
      padding: "10px",
    };

    return (
      <div style={style} className="App">
        <UserOutput username={this.state.username}/>
        <UserInput  username={this.state.username} changed={this.changeUsernameHandler}/>
        <UserOutput username={this.state.username}/>
        <UserInput  username={this.state.username} changed={this.changeUsernameHandler}/>
        <UserOutput username={this.state.username}/>
        <UserInput  username={this.state.username} changed={this.changeUsernameHandler}/>
      </div>
    );
  }
}

export default App;
