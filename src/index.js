import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// //JSX
// //ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))

// //OLD way
// var myNewP = document.createElement("p");
// myNewP.innerHTML = "This is a paragraph."


// /* First Excercise
// let unordL = (
//     <ul>
//         <li>First Element</li>
//         <li>Second Element</li>
//         <li>Third Element</li>
//     </ul>);

// ReactDOM.render(unordL, document.getElementById('second')) */

// /* 2nd Exercise
// function MyApp() {
//     return (    
//     <ul>
//         <li>First Element</li>
//         <li>Second Element</li>
//         <li>Third Element</li>
//     </ul>);
// }

// ReactDOM.render(<MyApp />, document.getElementById('second'))*/

// //Functional Components Practice
// ReactDOM.render(<App />, document.getElementById("root"));

// Parent/Child Component Practice
ReactDOM.render(<App />, document.getElementById("root"))