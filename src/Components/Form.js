import React from 'react';
import './Form.css'

const Form = ({setText, TodoList, setTodoList, Text, setStatus}) => {
    const inputHandler = (event) =>{
        setText(event.target.value);
    }
    const submitToTodoList = (event) =>{
        event.preventDefault();
        setTodoList([
            ...TodoList, {text: Text, completed:false, id: Math.random()*1000}
        ]);
        setText("");
    }
    const statusHandler = (event) =>{
        setStatus(event.target.value)
    }
    return (
            <form>
                <input value={Text} onChange={inputHandler} type="text" className="todo-input"/>
                <button onClick={submitToTodoList} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="optionContainer">
                    <select onClick={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
    );
};

export default Form;