import "./App.css";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  inputTitleState,
  inputDescriptionState,
  inputFilterState,
  todoListState,
  filteredTodoState,
} from "./store/atoms/atom";

function App() {
  const titleVal = useRecoilValue(inputTitleState);
  const descriptionVal = useRecoilValue(inputDescriptionState);

  const setTitleVal = useSetRecoilState(inputTitleState);
  const setDescriptionVal = useSetRecoilState(inputDescriptionState);
  const setFilterVal = useSetRecoilState(inputFilterState);

  const [todos, setTodos] = useRecoilState(todoListState);

  const appendTodos = () => {
    if (titleVal && descriptionVal) {
      setTodos([...todos, { title: titleVal, description: descriptionVal }]);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitleVal(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescriptionVal(e.target.value)}
        />
      </div>
      <button onClick={appendTodos}>Add Todo</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => {
          setFilterVal(e.target.value);
          console.log(`filter value : ${e.target.value}`)
        }}
      />
      <TodoListRenderer />
    </>
  );
}

const TodoListRenderer = () => {
  const filteredTodos = useRecoilValue(filteredTodoState);
  console.log("Filtered Todos:", filteredTodos);

  return (
    <ul>
      {filteredTodos.map((todo, index) => (
        <li key={index}>
          <p>Title: {todo.title}</p>
          <p>Description: {todo.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default App;
