import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const InputForm = ({ addNewTodo, singleTodo, setEditTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(false);
  const todo = {
    id: uuid(),
    title,
    description,
    date,
    status,
  };
  const addTodo = () => {
    if (title === "" || description === "" || date === "") {
      alert("Empty Fields");
    } else {
      addNewTodo(todo);
      setTitle("");
      setDescription("");
      setDate("");
      setStatus(false);
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      <label htmlFor="my-modal" className="btn">
        Add New Task
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add a new Task</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Write Your Task Title  "
              className="input input-bordered"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea input-bordered"
              placeholder="Describe Your Task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label className="label">
              <span className="label-text">Scheduled On</span>
            </label>
            <input
              type="date"
              placeholder="Write Your Task Title  "
              className="input input-bordered"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close
            </label>
            <label className="btn" onClick={addTodo}>
              Add Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
