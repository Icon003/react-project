import React, { Component } from 'react';

import './TodoListItem.css'

class TodoListItem extends Component {
    render() {
		const { label, done, onDeleted, onToggleDoneItem } = this.props;

		console.log(done);

		let classNameTodoItem = 'todo-list__text-list-item';

		if(done === true) {
			classNameTodoItem += ' todo-list__text-list-item--done';
		}

    	return (
        	<li className="todo-list__list-item">
				<span className={ classNameTodoItem } onClick={ onToggleDoneItem }> { label } </span>
				<div className="todo-list__control-container-list-item">
					<button className="todo-list__button-delete" onClick={ onDeleted }></button>
				</div>

			</li>
    	);
	}
}

export default TodoListItem;