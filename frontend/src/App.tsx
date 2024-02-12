import "./App.css";
import { CreateTodo } from "./components/Component";
import { ALLTODO } from "./components/Todos";

const jo = [
  {
    title: "Go to Gym",
    description: "Go to Gym at 7",
    completed: false,
  },
  {
    title: "Go to Study",
    description: "Go to study at 7",
    completed: false,
  },
];

function App() {
  return (
    <>
      <CreateTodo></CreateTodo>
      <br />
      <ALLTODO {...jo}></ALLTODO>
    </>
  );
}

export default App;
