import React from 'react';
import './App.css';
import cancelImg from './images/cancel.svg';

export default class App extends React.Component {
  state = {
    todos: [
      {
        // id: 1,
        description: "a thing",
        completed: false,
      },
      {
        // id: 2,
        description: "a thing",
        completed: true,
      },
      {
        // id: 3,
        description: "a thing",
        completed: false,
      },
    ],
    newTodoDesc: ''
  }

  newTodo = e => {
    this.setState({ newTodoDesc: e.target.value })
  }

  addTodo = () => {
    let todos = this.state.todos
    todos.push({
      description: this.state.newTodoDesc,
      completed: false
    })
    this.setState({ todos: todos, newTodoDesc: '' })
  }

  render() {
    return (
      <div className="App" >
        <h1> TaDa!List </h1>
        <ul className="listItems" >
          {this.state.todos.map((todo, index) => (
            <li key={index} id="item">
              <input type="checkbox" id="check" defaultChecked={todo.completed} />
              {todo.description}
              <img src={cancelImg} alt="cancel-icon" />
            </li>
          ))}
        </ul>
        <div className="addItem">
          <input
            type="text"
            value={this.state.newTodoDesc}
            onChange={this.newTodo}
            onKeyDown={(e) => e.key === 'Enter' ? this.addTodo() : ''}
          />

          <button id="btn" onClick={this.addTodo}>Add item</button>
        </div>
      </div>
    )
  }
}