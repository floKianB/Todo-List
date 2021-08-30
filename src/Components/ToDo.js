import React from 'react';
import TodoPart from './TodoPart';

const ToDo = ({TodoList, setTodoList, filtertodo}) => {
    return (
        <div>
            <div class="todo-container">
                <ul class="todo-list">
                    {filtertodo.map((todo) =>(
                        <TodoPart 
                        text={todo.text} 
                        id={todo.id} 
                        todo={todo}
                        setTodoList={setTodoList} 
                        TodoList={TodoList}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDo;