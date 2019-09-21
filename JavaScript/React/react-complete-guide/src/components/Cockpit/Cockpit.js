import React, { useEffect, useRef, useContext } from "react";
import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleButtonRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    }
  }, []);

  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  //   const timer = setTimeout(() => {
  //     alert("Saved data to cloud");
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //     console.log("[Cockpit.js] cleanup work in useEffect");
  //   }
  // }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    }
  });

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push(styles.red)
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold)
  }
  return (
    <div className={classes.Cockpit}><h1>{props.title}</h1>
      <p className={classes.join(" ")}>This works!</p>
      <button ref={toggleButtonRef} onClick={props.clicked}>Toggle Persons</button>
    <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);