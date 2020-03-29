import React, { Component } from 'react';

import TodoListItem from '../TodoListItem';

import './TodoList.css';

class TodoList extends Component {
    render() {
        const { todos, onDeleted, onToggleDoneItem } = this.props;

        const elements = todos.map((item) => {    
            return (
                <TodoListItem key= { item.id } 
                label= { item.label } 
                done= { item.done } 
                onDeleted={() => { onDeleted(item.id) }}
                onToggleDoneItem={() => { onToggleDoneItem(item.id) }}/>
            )
        });

        return (
            <ul className="todo-list">
                { elements }
            </ul>
        );
    }
}

export default TodoList;