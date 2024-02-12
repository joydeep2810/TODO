/*export function ALLTODO() {
  async () => {
    const alltodos = await axios.get("http://localhost:3000/all");
    const data = alltodos.data;
    return data;
  };
  return (
    <div>
      <div>{data}</div>
    </div>
  );
}*/

type Todo = {
  title: String;
  description: String;
  completed: Boolean;
};
type Todo2 = Todo[];

export function ALLTODO(todos: Todo2) {
  console.log(todos);
  if (Array.isArray(todos)) {
    console.log("good");
  } else {
    console.log("not good");
  }
  console.log("inside first");
  return (
    <div>
      {todos.map(function (todo, index) {
        console.log(todo);
        console.log("inside second");
        return (
          <div key={index}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
