import React, { Component } from 'react';
import ToDoForm from './components/TodoForm.jsx';

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
      newTodo: ''
    }

  }

  changehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.newTodo)
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo]
    })
  }




  render() {
    return (
      <div className="App">
        <h1>To do App</h1>
        {this.state.todos[0].task}
        <ToDoForm 
          changehandler={this.changehandler}
          addTodo={this.addTodo} 
        />

      </div>
    );
  }
}

export default App;
