import React, { Component } from "react";
import styles from "./Person.module.css";
import Aux from "../../../hoc/Auxiliary";

class Person extends Component {
    render() {
        console.log("[Person.js] rendering...");
        return <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </Aux>;
    };
}
// const person = (props) => {
//     console.log("[Person.js] rendering...");
//     return (
//         <div className={styles.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//         )
// };

export default Person;