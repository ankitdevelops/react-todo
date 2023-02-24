import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import TaskList from "./Components/TaskList";

function App() {
  const [todos, setTodos] = useState([]);
  const [remainingTask, setRemainingTask] = useState(0);
  // add new todo
  const addNewTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  // delete a todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // mark todo as complete
  const markComplete = (id) => {
    const todoObjIndex = todos.findIndex((todo) => todo.id === id);
    const todo = todos[todoObjIndex];
    todo.status = true;
  };

  // set reamaining tasks number
  const updateRemainingTask = (num) => {
    setRemainingTask(num);
  };
  return (
    <main className="md:container container px-3 mx-auto md:mx-auto my-24">
      <Header remainingTask={remainingTask} />
      <InputForm addNewTodo={addNewTodo} />
      <TaskList
        todos={todos}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
        updateRemainingTask={updateRemainingTask}
      />
    </main>
  );
}

export default App;
