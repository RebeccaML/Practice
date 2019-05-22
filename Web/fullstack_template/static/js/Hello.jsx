import React from "react";

var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting: "Hello" + this.props.name};

        // This binding is necessary to make 'this' work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
    }

    personalizeGreeting(greeting) {
        this.setState({greeting: greeting + " " + this.props.name + "!"});
    }

    getPythonHello() {
        $.get(window.location.href + "hello", (data) => {
            console.log(data);
            this.personalizeGreeting(data);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <hr/>
                <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
                    Say Hello!
                </Button>
            </div>
        );
    }
}