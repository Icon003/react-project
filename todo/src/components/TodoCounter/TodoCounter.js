import React, { Component } from 'react';

import './TodoCounter.css'

class TodoCounter extends Component {
    render() {
        const { activeItemTodo, doneItemTodo } = this.props;

    	return (
            <div className="todo-counter">
                <span className="todo-counter__active-todo-counter">{ activeItemTodo } активных, </span>
                <span className="todo-counter__done-todo-counter">{ doneItemTodo } выполненных</span>
            </div>
    	);
    }
}

export default TodoCounter;