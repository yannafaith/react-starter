import React, { Component } from 'react';
import TodoForm from './components/ToDoForm.jsx';
import ToDoList from './components/ToDoList.jsx';
import './App.css'

let todoData = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Organize Room',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Organize Kitchen',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Organize Kitchen',
    id: Date.now(),
    completed: false
  },
];

class App extends Component {
  constructor () {
    super();
    this.state = {
      todos: todoData,
    }
  }

  changeHandler = (e) =>  {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  submitNewTodo = (e) => {
    e.preventDefault();

    this.setState({
      todos: [
        ...this.state.todos, 
        {task: this.state.task,
          id: Date.now(),
          completed: false
        }
      ],
      task: '',
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: todo.completed === false ? true: false};}
        else {return todo;}
      })})
  };

  clearCompletedTodos = () => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          if (todo.completed === false) {return todo};
        })
      });

  }

  render() {
    return (
      <div className="App">
        <h2>To do list</h2>
        <ToDoList 
          data={this.state.todos} 
          toggleComplete={this.toggleComplete} 
        />
        <TodoForm
          changeHandler={this.changeHandler} 
          submitNewTodo={this.submitNewTodo} 
          clearCompletedTodos={this.clearCompletedTodos} 
        />
      </div>
    );
    }
}

export default App;

