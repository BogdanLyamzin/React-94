// import { createElement } from 'react';

import './App.css';

// const header = createElement(
//   "h1",
//   {className: "header"},
//   "Site header"
// );

// console.log(header)

const pageTitle = "Page title";
const username = "admin";
const nullVar = null;
const udefinedVar = undefined;

const arr = [1, 5, 6];

const obj = {
  name: "Alex"
}

function App() {
  return (
    <>
      <div className="main">
        <h1>{pageTitle}</h1>
        <label htmlFor="id">password</label>
        <input id="password" className="field" type="password" autoFocus />
        <p>{username === "admin" ? "Welcome to site config" : "Need permission to access"}</p>
        <p>{nullVar}</p>
        <p>{udefinedVar}</p>
        <div>{arr}</div>
        {/* <div>{obj}</div> */}
      </div>
      <div className="footer"></div>
    </>
  );
}

// function App() {
//   return (
//        createElement("input") 
//   );
// }

export default App;
