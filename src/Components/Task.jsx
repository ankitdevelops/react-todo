import React from "react";

const Task = ({ todo, deleteTodo, markComplete }) => {
  return (
    <div className="card w-10/12 mx-auto bg-base-100 shadow-xl my-3">
      <div className="card-body">
        <div className="card-title">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => {
              markComplete(todo.id);
            }}
          />
          <h2>{todo.title}</h2>
        </div>
        <p className="sm:w-9/12 text-xl w-full my-1 opacity-80">
          {todo.description}
        </p>
        <div>
          <div className="badge badge-warning gap-2">{todo.date}</div>
          {/* <div className="badge badge-warning gap-2 mx-2" role="button" onClick={}>
            Edit
          </div> */}
          <button
            className="badge badge-warning gap-2 mx-2"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
