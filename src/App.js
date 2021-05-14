import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todoitem from "./components/Todoitem";
function App() {
  const [todo, SetTodo] = useState("");
  const [TodoArray, SetTodoArray] = useState([]);

  const removeTodo = (id) => {
    SetTodoArray(TodoArray.filter((elem) => elem.id !== id));
  };
  return (
    <div className="App">
      <form>
        {" "}
        <input onChange={(e) => SetTodo(e.target.value)} value={todo} />
        <button
          onClick={(e) => {
            e.preventDefault();
            SetTodoArray([
              ...TodoArray,
              {
                id: uuidv4(),
                task: todo,
              },
            ]);
            SetTodo("");
          }}
        >
          ADD
        </button>
      </form>
      <ul>
        {TodoArray.map((todoitem) => (
          <Todoitem key={todoitem.id} data={todoitem} delete={removeTodo} />
        ))}
      </ul>
    </div>
  );
}
export default App;
