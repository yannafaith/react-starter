import React, { Component } from 'react';
import TodoForm from './components/TodoForm.jsx';
import ToDoList from './components/ToDoList.jsx';
import './index.css'


const todoData = [
  {
    task: 'create repo',
    id: Date.now(),
    completed: false
  },
  {
    task: 'run yarn',
    id: Date.now(),
    completed: false
  },
  {
    task: 'run yarn start',
    id: Date.now(),
    completed: false
  },
]

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: todoData,
    }

  }

  changehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault();

    this.setState({
      todos: [
        ...this.state.todos, 
        {task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ],
      task: '',
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item, completed: item.completed === false ? true: false} }
        else {return item;}
      })})
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        if (item.completed === false) {return item}
      })
    })
  }



  render() {
    return (
      <div className="App">
        <h1>To do App</h1>

        <ToDoList 
          todos={this.state.todos} 
          toggleComplete={this.toggleComplete}
        />

        <TodoForm 
          changehandler={this.changehandler}
          addTodo={this.addTodo} 
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}

export default App;
