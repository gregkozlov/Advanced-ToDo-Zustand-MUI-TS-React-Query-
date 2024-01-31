import { create } from "zustand";

type TodoState =
  | "ToDo"
  | "In Progress"
  | "Blocked"
  | "InQA"
  | "Done"
  | "Deployed";

type TodoItem = {
  id: number;
  title: string;
  description: string;
  status: TodoState;
  createdAt: number;
};

type TodoStore = {
  todos: TodoItem[];
  addTodo: (title: string, description: string) => void;
  removeTodo: (id: number) => void;
  updateTodoState: (id: number, newState: TodoState) => void;
};

const useTodoStore = create<TodoStore>(set => ({
  todos: [
    // {
    //   id: 2,
    //   title: "Task title goes here",
    //   description: "sample desc2",
    //   status: "In Progress",
    //   createdAt: Date.now(),
    // },
    // {
    //   id: 5,
    //   title: "todo5",
    //   description: "sample desc5",
    //   status: "Done",
    //   createdAt: Date.now(),
    // },
  ],
  addTodo: (title, description) =>
    set(state => ({
      todos: [
        ...state.todos,
        {
          id: Math.floor(Math.random() * 10000),
          title,
          description,
          status: "In Progress",
          createdAt: Date.now(),
        },
      ],
    })),
  removeTodo: id =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    })),
  updateTodoState: (id, newState) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, state: newState } : todo,
      ),
    })),
}));

export default useTodoStore;
