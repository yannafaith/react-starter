import React, { Component } from 'react';
import ToDoForm from './components/TodoForm.jsx';
import ToDoList from './components/ToDoList.jsx';

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

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
           return item.completed === false ? true : false
        }
      })
    })
  }




  render() {
    return (
      <div className="App">
        <h1>To do App</h1>
        <ToDoList todos={this.state.todos} />
        <ToDoForm 
          changehandler={this.changehandler}
          addTodo={this.addTodo} 
          toggleComplete={this.toggleComplete}
        />

      </div>
    );
  }
}

export default App;
