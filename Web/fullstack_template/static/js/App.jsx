import React from "react";
import Hello from "./Hello";

export default class App extends React.Component {
    render() {
        return (
                <div className="header-contents">
                    <h1><Hello name="Rimini" /></h1>
                </div>
        );
    }
}