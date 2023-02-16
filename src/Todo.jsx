import React, { Component } from 'react'

class Todo extends Component {
	render() {
		return (
			<div>
				{/* 🍀 This Component Todo.jsx */}
				<div className="Todo">
					<li>{this.props.task}</li>
				</div>
			</div>
		)
	}
}
export default Todo