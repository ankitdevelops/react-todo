import React from "react";
import Task from "./Task";

const TaskList = ({ todos, deleteTodo, markComplete, updateRemainingTask }) => {
  const leftTask = todos.filter((todo) => todo.status !== true);
  updateRemainingTask(leftTask.length);

  if (todos.length === 0) {
    return (
      <p className=" text-lg sm:text-2xl  font-light opacity-75 text-center">
        Add Some Todo's and Organize Your Day
      </p>
    );
  }

  return (
    <>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
        />
      ))}
    </>
  );
};

export default TaskList;
