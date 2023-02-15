import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
		}
	}
	render() {
		const todos = this.state.todos.map((todo) => {
			return <Todo task={todo.task} />
		})
		return (
			<div className='TodoList'>
				🍀 This Component TodoList.jsx
				<h1>Yapılacaklar Listesi <span>React ile Todo List Ugulaması</span></h1>

				<ul>{todos}</ul>
			</div>
		)
	}
}

export default TodoList