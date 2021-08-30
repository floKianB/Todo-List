import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import Form from './Components/Form';
import ToDo from './Components/ToDo';

function App() {
  
  const [Text, setText] = useState();
  const [TodoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");
  const [filtertodo, setFiltertodo] = useState([]);

  useEffect(() =>{
    getLocalTodos();
  }, [])

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();

  }, [TodoList, status])

  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFiltertodo(TodoList.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFiltertodo(TodoList.filter(todo => todo.completed === false))
        break;
      default:
        setFiltertodo(TodoList)
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("TodoList", JSON.stringify(TodoList))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("TodoList")=== null ){
      localStorage.setItem("TodoList", JSON.stringify([]));
    } else {
      let saved = JSON.parse(localStorage.getItem("TodoList"));
      setTodoList(saved);
    }
  }

  return (
    <div className={styles.app}>
    <header>
      <h1>FLO-ToDo</h1>    
    </header>
    <Form setText={setText} setTodoList={setTodoList} TodoList={TodoList} Text={Text} setStatus={setStatus}/>
    <ToDo TodoList={TodoList} setTodoList={setTodoList} filtertodo={filtertodo}/>
    </div>
  );
}

export default App;
