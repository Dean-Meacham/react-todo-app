import React from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';
import styled from 'styled-components';

const AppWrap = styled.div`
  margin: 0px;
  padding: 0px;
  `
const ListContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  `
const ListItems = styled.ul`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1em;
  list-style: none;
  `

const TextField = styled.input`
  background-color: transparent;
  border: 0px solid;
  height: 20px;
  width: 160px;
  color: red;
  border-bottom: 1px solid;
  `

const ButtonPrimary = styled.button`
  background-color: red;
  color: white;
  font-size: 1em;
  border-radius: 10px;
  cursor: pointer;
  `
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
      <AppWrap>
        <Header />
        <ListContainer>
          <ListItems>
            {this.state.todos.map((todo, index) => (
              <Todo key={index} todo={todo} />
            ))}
          </ListItems>
          <ListItems>
            <TextField placeholder="add new"
              value={this.state.newTodoDesc}
              onChange={this.newTodo}
              onKeyDown={(e) => e.key === 'Enter' ? this.addTodo() : ''}>
            </TextField>
            <ButtonPrimary>
              Add
            </ButtonPrimary>
          </ListItems>
        </ListContainer>
      </AppWrap>





      // <div className="App" >
      //   {/* <h1> TaDa!List </h1> */}
      //   <Header />
      //   <ul className="listItems" >
      //     {this.state.todos.map((todo, index) => (
      //       <Todo key={index} todo={todo} />

      // <li key={index} id="item">
      //   <input type="checkbox" id="check" defaultChecked={todo.completed} />
      //   {todo.description}
      //   <img src={cancelImg} alt="cancel-icon" />
      // </li>
      //     ))
      //     }
      //   </ul>
      //   <div className="addItem">
      //     <input
      //       type="text"
      //       value={this.state.newTodoDesc}
      //       onChange={this.newTodo}
      //       onKeyDown={(e) => e.key === 'Enter' ? this.addTodo() : ''}
      //     />

      //     <button id="btn" onClick={this.addTodo}>Add item</button>
      //   </div>
      // </div>
    )
  }
}