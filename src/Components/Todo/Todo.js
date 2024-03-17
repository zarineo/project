import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    console.log(tasks);
    setTask("");
  };
  return (
    <div className="todo">
      <form className="todo__form">
        <div className="todo__input">
          <input
            type="text"
            name="task"
            placeholder=""
            value={task}
            className="todo__text"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button className="todo__add" onClick={addTask}></button>
        </div>
      </form>
      <ul className="todo__items">
        {tasks.map((task, i) => (
          <p key={i}>{task}</p>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
