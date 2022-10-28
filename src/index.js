// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import Card from"./component/Card";
import Form from "./component/Form";
import User from "./component/User";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <User />
    <Form />
    <Card/>
    <App/>

  </>
);

// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <>
// <Form/>
// </>
// );

// import App from './component/App';

// const myFirstElement = <h1>hello react</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//     <App/>

//     </>
// )
// ;

// (parameter) => {

// }
