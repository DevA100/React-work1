import React from 'react'
import styles from './App.module.css'
import Button from './Button';
import User ,{OrangeButton,Myname}from './Button';
const App = () => {
  return (
    <div style={
        {
            display: "flex",
            justifyContent: "space-around",
        }
    }>
       <Button onClick={
        () => {
          alert("chidimma");}

       } 
       name= "proceed" 
       Bgcolor= "orange"/>
       <Button onClick={()=>{
        prompt("Enter First name:")
       }

       } 
       name= "ok" Bgcolor= "DodgerBlue"/>
       <Button 
       onhover={
        () =>{
          alert("I love you!");
        }
       }
       name= "about" Bgcolor= "MediumSeaGreen" />
       <Button name= "next" Bgcolor= "violet" />
    </div>
  );
}

export default App