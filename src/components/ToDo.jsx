import React, { useRef, useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isSorted, setIsSorted] = useState(true);

  const handleAddNewTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((prev) => [...prev, newTodo]);
      setNewTodo("");
      refInput.current.style.display = "none";
      refUl.current.style.display = "block";
    }
  };

  const refInput = useRef();
  const refUl = useRef();
  const refFilter = useRef();

  const handleAddInput = () => {
    refInput.current.style.display = "block";
  };

  const handleDeleteList = (extodo) => {
    let filteredTodos = todos.filter((todo) => todo !== extodo);
    setTodos(filteredTodos);
  };

  const handleFilter = () => {
    if (isSorted) {
      todos.sort();
      refFilter.current.textContent = "⬇";
    } else {
      todos.sort().reverse();
      refFilter.current.textContent = "⬆";
    }
    setIsSorted(!isSorted);
  };

  return (
    <div className="container">
      <div className="top-color"></div>
      <div className="heading">To-Do List</div>
      <div className="filtering">
        <p ref={refFilter} onClick={handleFilter}>
          ⬇
        </p>
      </div>
      <div ref={refInput} className="add-list">
        <ul>
          <li>
            <input
              value={newTodo}
              type="text"
              className={"add-list"}
              placeholder="List daxil edin..."
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
            />
            <div className="deleteDiv">
              <p>x</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="lists">
        <ul className="listUl" ref={refUl}>
          {todos.map((todo, index) => (
            <li key={index}>
              <p>{todo}</p>
              <button
                className="deleteDiv"
                onClick={() => handleDeleteList(todo)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="btn">
        <div className="btnOne" onClick={handleAddInput}>
          +
        </div>
        <div className="btnTwo" onClick={handleAddNewTodo}>
          Əlavə et
        </div>
      </div>
    </div>
  );
};

export default ToDo;
