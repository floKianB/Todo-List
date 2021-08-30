import React from 'react';
import './todoPart.css'

const TodoPart = ({text, setTodoList, TodoList, todo}) => {

    const deleteHandler = () =>{
        setTodoList(TodoList.filter(element =>(element.id !== todo.id)
        ))
    };
    const compeleteHandler = () => {
        setTodoList(TodoList.map(item => {
            if(item.id===todo.id){
                return{
                    ...item, completed : !item.completed
                };
            }
            return item;
            })
        );
        console.log(TodoList)
    };
    return (
        <div className="todo">
            <li className={`todoItem ${todo.completed ? "completed" : ''}`}> {text} </li>
                <buttom className="complete" onClick={compeleteHandler}>
                    <i className="fas fa-check"></i>
                    </buttom>
                <buttom className="trash" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </buttom>
        </div>
    );
}

export default TodoPart;