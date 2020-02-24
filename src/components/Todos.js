import React, { Component } from 'react';
// Todos comes from the state of the app.js and we pass them down as props and acces it with this.props
class Todos extends Component {
  render() {
    console.log(this.props.todos)
  return this.props.todos.map((todo) => (<h3>{ todo.title }</h3>
    ));
  }
}




export default Todos;