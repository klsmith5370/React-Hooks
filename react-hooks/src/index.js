import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaStar } from "react-icons/fa";

// function App() {
//   useState hook
//     using array destructuring, enter in the name of the state variable you want to keep track of and set an initial value
//     the second will be a function which will be used for changing the state

//   const [status, setStatus] = useState("Not Delivered");
//   const [checked, setChecked] = useState(false);
//   return (
//     <div>
//      {/* can create a button to set the state */}
//          {/* <h1>The package is: ${status}.</h1> */}

//          {/* everytime this button is clicked on, it will initiate the function and change the status from the initial status */}
//          {/* <button onClick={() => setStatus("Delivered")}>Deliver</button> */}

//          {/* can also use a checkbox to set the state */}
//          {/* would use the value "checked" and with an onChange handler, it will update the state using the setChecked function */}

//          {/* <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>
//          <p>{checked ? "checked" : "not checked"}</p> */}
//     </div>
//   )
// }

// creating a Star Rating Component
// const createArray = (length) =>[...Array(length)] // helper function to create an array of stars

// function Star({ selected = false, onSelect }) {
//   return <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>;
// }

// function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />));
// }

// function App() {
//   // Rendering the Star Rating component 
//   return <StarRating totalStars={5} />;
// }

// useEffect Hook
// function App() {
//   const [name, setName] = useState("Jan");
//   const [admin, setAdmin] = useState(false);

//   // change the document title
//   // using a dependency array with this hook, will only allow it to fire once, after the render
//   useEffect(() => {
//     // document.title = `Celebrate ${name}`;
//     console.log(`Celebrate ${name}`);
//   }, [name]);

//   useEffect(() => {
//     console.log(`The user is: ${admin ? "admin" : "not admin"}`);
//   }, [admin])

//   return (
//     <section>
//       <p>Congratulations {name}!</p>
//       <button onClick={() => setName("Will")}>Change Winner</button>
//       <p>{admin ? "logged in" : "not logged in"}</p>
//       <button onClick={() => setAdmin(true)}>Log In</button>
//     </section>
//   )
// }

// using useEffect to fetch data
// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.github.com/users`) // takes in the URL of the API
//     .then(response => response.json()) // get the response as JSON
//     .then(setData); // call the setData function
//   }, []); // need dependency array to prevent re-renders and requests

//   if(data) {
//     // map through the data state variable and it will list out the users with their login
//     return (
//       <div>

//         <ul>  
//           {data.map((user) => (
//             <li key={user.id}>{user.login}</li>
//           ))}
//         </ul>
//         <button onClick={() => setData([])}>Remove Data</button>

//       </div>
//     )
//   }
//   return <p>No Users</p>;
// }
 
// useReducer hook - another way of managing state
// function App() {
//   // takes in 2 arguments, a function that returns a new state and the initial state

//   const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
//   return <h1 onClick={() => setNumber(1)}>{number}</h1>

//   // refactoring the checkbox using useReducer

//   const [checked, toggle] = useReducer(
//     (checked) => !checked, false
//   );

//   return (
//     <>
//      <input 
//         type="checkbox" 
//         value={checked} 
//         onChange={toggle}/>
//         {checked ? "checked" : "not checked"}
//     </>
//   )
// }


// useReducer hook - to dispatch an action
 // the initialState which will be passed into the useReducer hook
// const initialState = {
//   message: "hi"
// };
//  // the reducer function which takes in the state and an action and returns the new state

// function reducer(state, action) {
//   switch(action.type) {
//     case "yell": 
//       return {
//         message: `HEY! I JUST SAID ${state.message}`
//       };

//     case 'whisper':
//       return {
//         message: `excuse me, I just said ${state.message}`
//       };
//   };
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <p>Message: {state.message}</p>
//       <button onClick={() => dispatch({ type: "yell" })}>YELL</button>

//       <button onClick={() => dispatch({ type: "whisper" })}>Whisper</button>
//     </>
//   )
// }

// useReducer hook - another way of managing state
// function App() {
//   // takes in 2 arguments, a function that returns a new state and the initial state

//   const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
//   return <h1 onClick={() => setNumber(1)}>{number}</h1>

//   // refactoring the checkbox using useReducer

//   const [checked, toggle] = useReducer(
//     (checked) => !checked, false
//   );

//   return (
//     <>
//      <input 
//         type="checkbox" 
//         value={checked} 
//         onChange={toggle}/>
//         {checked ? "checked" : "not checked"}
//     </>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

