import React, { Component } from 'react';

import './TodoNavigation.css'

class TodoNavigation extends Component {
    constructor() {
        super();

        this.buttons = [
            { id: 'all', label: 'Все' },
            { id: 'active', label: 'Активные' },
            { id: 'done', label: 'Выполненные' }
        ];

    };
    render() {
        const { activeFilter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ id, label }) => {
            const isActive = activeFilter === id;
            const className = isActive ? 'todo-navigation__button--active' : '';
            return (
                <li key={ id } className="todo-navigation__list-item">
                    <button id={ id } className={`todo-navigation__button ${ className }`} onClick={ () => onFilterChange(id) }>{ label }</button>
                </li>
            );
        });
    	return (
            <nav className="todo-navigation">
                <ul className="todo-navigation__list">
                    { buttons }
                </ul>
            </nav>
        );   
    }
}

export default TodoNavigation;