import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
		}
		this.create = this.create.bind(this)
	}
	create(newTodo) {
		this.setState({
			todos: [...this.state.todos, newTodo]
		})
	}
	remove(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		})
	}
	update(id, updateTask) {
		const updateTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, }
			}
		})

	}

	render() {
		const todos = this.state.todos.map((todo) => {
			return <Todo task={todo.task} removeTodo={() => this.remove(todo.id)} />
		})
		return (
			<div className='TodoList'>
				{/* 🍀 This Component TodoList.jsx */}
				<h1>Yapılacaklar Listesi <span>React ile Todo List Ugulaması</span></h1>

				<ul>{todos}</ul>
				<NewTodoForm createTodo={this.create} />
			</div>
		)
	}
}

export default TodoList