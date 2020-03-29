import React, { Component } from 'react';

import HeaderTitle from '../HeaderTitle';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';
import TodoNavigation from '../TodoNavigation';
import TodoCounter from '../TodoCounter';
import AddTodoItem from '../AddTodoItem';

import './App.css';

class App extends Component {

    constructor() {
        super();

        this.maxId = 100;

        this.state = {
            todoData: [
                this.createTodoItem('Выпить чаю'),
                this.createTodoItem('Покушать'),
                this.createTodoItem('Просмотреть 3 раздел курса по React')
            ],
            fragmentSearch: '',
            activeFilter: 'all' // all, active, done
        };

        this.addItem = (text) => {
            const newItem = this.createTodoItem(text);

            this.setState(({ todoData }) => {
                const newArray = [ 
                    ...todoData,
                    newItem
                ];
                return {
                    todoData: newArray
                }
            });
        };

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const ind = todoData.findIndex((element) => {
                    return ( element.id === id ); 
                });
                const before = todoData.slice(0, ind);
                const after = todoData.slice(ind + 1);
                const newData = [ 
                    ...before, 
                    ...after
                ];
                return {
                    todoData: newData
                };
            });
        };

        this.toggleDoneItem = (id) => {

            this.setState(({ todoData }) => {
                const ind = todoData.findIndex((element) =>{
                    return ( element.id === id );
                });

                const oldItem = todoData[ind];
                const newItem = {
                    ...oldItem,
                    done: !oldItem.done
                };

                const before = todoData.slice(0, ind);
                const after = todoData.slice(ind + 1);

                const newArray = [
                    ...before,
                    newItem,
                    ...after
                ];

                return {
                    todoData: newArray
                };
            });  
        };

        this.onSearchChange = (fragmentSearch) => {
            this.setState({ fragmentSearch });
        };

        this.onFilterChange = (activeFilter) => {
            this.setState({ activeFilter });
            console.log(activeFilter);
        }

    };

    createTodoItem(text) {
        return {
            label: text,
            done: false,
            id: this.maxId++
        };
    };

    search(items, fragmentSearch) {
        console.log(fragmentSearch);
        if(fragmentSearch === 0) {
            return items;
        };

        return items.filter((item) => {
            return (item.label.toLowerCase().indexOf(fragmentSearch.toLowerCase()) > -1);
        });
    };

    filter(items, activeFilter) {
        switch(activeFilter) {
            case 'all': {
                return (items);
            } case 'active': {
                return (items.filter((item) => !item.done));
            } case 'done': {
                return (items.filter((item) => item.done));
            } default: {
                return (items);
            }
        };
    };

    render() {

        const { todoData, fragmentSearch, activeFilter } = this.state;

        const visibleTodoItems = this.filter(this.search(todoData, fragmentSearch), activeFilter);

        const countActiveItemTodo = todoData.filter((element) => !element.done).length;
        const countDoneItemTodo = todoData.filter((element) => element.done).length;
    
        return (
            <div className="container">
                <HeaderTitle/>
                <div className="todo-counter-container">
                    <TodoCounter activeItemTodo={ countActiveItemTodo }
                    doneItemTodo={ countDoneItemTodo }/>
                </div>
                <div className="container-element-control">
                    <div className="container-element-control__search-container">
                        <TodoSearch onSearchChange={ this.onSearchChange }/>
                    </div>
                    <div className="container-element-control__navigation-container">
                        <TodoNavigation activeFilter={ activeFilter }
                        onFilterChange={ this.onFilterChange }/>
                    </div>
                </div>
                <div className="container__todo-list-container">
                    <TodoList todos={ visibleTodoItems } 
                    onDeleted={ this.deleteItem }
                    onToggleDoneItem={ this.toggleDoneItem }/>
                </div>
                <AddTodoItem onAddItem={ this.addItem }/>
            </div>
        );
    };
};

export default App;