import React, { Component } from 'react';

import './TodoSearch.css';

class TodoSearch extends Component {
    constructor() {
        super();

        this.state = {
            fragmentSearch: ''
        }

        this.searchChange = (event) => {
            const fragmentSearch = event.target.value;
            this.setState({
                fragmentSearch: fragmentSearch
            });
            this.props.onSearchChange( fragmentSearch );
        };
    };
    render() {
        return (
            <input type="search" 
            placeholder="Поиск" 
            className="todo-search" 
            value={ this.state.fragmentSearch } 
            onChange={ this.searchChange }></input>
        );
    }
}

export default TodoSearch;