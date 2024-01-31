import { create } from "zustand";

type TodoState = "In Progress" | "Blocked" | "InQA" | "Done" | "Deployed";

type TodoItem = {
  id: number;
  title: string;
  description: string;
  status: TodoState;
  createdAt: string;
};

type TodoStore = {
  todos: TodoItem[];
  addTodo: (title: string, description: string, createdAt: string) => void;
  removeTodo: (id: number) => void;
  updateTodoState: (id: number, newState: TodoState) => void;
};

const useTodoStore = create<TodoStore>(set => ({
  todos: [
    {
      id: 2,
      title: "Task title goes here",
      description: "sample desc2",
      status: "In Progress",
      createdAt: "2021-01-12T23:33:00.000Z",
    },
    {
      id: 5,
      title: "todo5",
      description: "sample desc5",
      status: "Done",
      createdAt: "2023-12-15T03:37:00.000Z",
    },
  ],
  addTodo: (title, description, createdAt) =>
    set(state => ({
      todos: [
        ...state.todos,
        {
          id: Math.random(),
          title,
          description,
          status: "In Progress",
          createdAt,
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
