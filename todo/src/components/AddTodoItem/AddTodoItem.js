import React, { Component } from 'react';

import './AddTodoItem.css';

class AddTodoItem extends Component {


    
    constructor() {
        super();

        this.state = {
            text: ''
        }
        
        this.onTextChange = (event) => {
            this.setState({
                text: event.target.value
            });
            console.log(event.target.value);
        };


        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.onAddItem(this.state.text);
            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            <form className="addTodoItemForm" onSubmit={ this.onSubmit }>
                <input type="text" placeholder="Введите название" className="addTodoItemForm__input" onChange={ this.onTextChange } value={ this.state.text }></input>
                <button className="addTodoItemForm__button">Добавить напоминание</button>
            </form>  
        );

    }
}

export default AddTodoItem;