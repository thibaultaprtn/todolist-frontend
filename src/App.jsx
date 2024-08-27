import { useState } from "react";
import "./App.css";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  // console.log(todoList);
  // const todoListSort = (list) => {
  //   const listemp = [];
  //   for (let i = 0; i < list.length; i++) {
  //     list[i][1]
  //       ? listemp.push([list[i][0], true])
  //       : listemp.unshift([list[i][0], false]);
  //   }
  //   return listemp;
  // };

  // plutot que de faire un algo de sorting on va pusher en bas de la liste quand on clique sur la checkbox
  return (
    <>
      <header>
        <BsCardList style={{ color: "#5C48D3", fontSize: 60 }} />
        <span>To Do List</span>
      </header>
      <div>
        <ul className="list">
          {/* <List /> */}
          {todoList.map((elem, index) => {
            // console.log("elem", elem);
            return (
              <li key={elem[0]}>
                <input
                  type="checkbox"
                  onClick={() => {
                    const tab = [...todoList];
                    if (!elem[1]) {
                      tab.splice(index, 1);
                      tab.push([elem[0], !elem[1]]);
                    } else {
                      tab.splice(index, 1);
                      tab.unshift([elem[0], !elem[1]]);
                    }

                    // console.log(tab[index]);
                    setTodoList(tab);
                  }}
                />
                <span
                  style={{
                    textDecorationLine: elem[1] ? "line-through" : "none",
                  }}
                >
                  {elem}
                </span>
                <button
                  className="rm"
                  onClick={() => {
                    const tab = [...todoList];
                    tab.splice(index, 1);
                    setTodoList(tab);
                    console.log("todolist", todoList);
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <section>
        <input
          className="inputfield"
          type="text"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          value={task}
          placeholder="New task..."
        />
        <button
          className="addtask"
          onClick={() => {
            const tab = [...todoList];
            // console.log("tab", tab);
            tab.push([task, false]);
            setTodoList(tab);
            setTask("");
          }}
        >
          Add Task
        </button>
      </section>
    </>
  );
}

export default App;
