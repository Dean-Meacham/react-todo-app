import React from 'react';
import './App.css';
import img from './images/cancel.svg';

let todos = [
  {
    id: 1,
    description: "a thing",
    completed: false,
  },
  {
    id: 2,
    description: "a thing",
    completed: true,
  },
  {
    id: 3,
    description: "a thing",
    completed: false,
  }

]

function App() {
  return (
    <div className="App">
      <h1> TaDa!List </h1>
      {/* <ul className="listItems">
        <li><img src={img} alt="delete" id="deleteBtn" />a thing<input type="checkbox"></input></li>
      </ul>
      <ul className="listItems">
        <li><img src={img} alt="delete" id="deleteBtn" />a thing<input type="checkbox"></input></li>
      </ul>
      <ul className="listItems">
        <li><img src={img} alt="delete" id="deleteBtn" />a thing<input type="checkbox"></input></li>
      </ul> */}
      <ul className="listItems">
        {todos.map(todo => (
          <li key={todo.id}>
            <img src={img} alt="delete" id="deleteBtn" />
            {todo.description}
            <input type="checkbox" defaultChecked={todo.completed} />
          </li>
          // <li key={todo.id}>
          //   {todo.description}
          //   <input type="checkbox" defaultChecked={todo.completed} />
          // </li>
          // <li>
          //   <div key={todo.id}>
          //     {todo.description}
          //     <input type="checkbox" defaultChecked={todo.completed} />
          //   </div>
          // </li>
        ))

        }
      </ul>
      <div className="new">
        <input type="text" className="input" />
        <button className="btn">add new</button>
      </div>
    </div >
  );
}

export default App;