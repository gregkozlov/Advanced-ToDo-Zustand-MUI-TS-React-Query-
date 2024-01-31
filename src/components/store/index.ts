import { create } from "zustand";

type TodoState = "In Progress" | "Blocked" | "InQA" | "Done" | "Deployed";

type TodoItem = {
  id: number;
  title: string;
  description?: string;
  state: TodoState;
};

type TodoStore = {
  todos: TodoItem[];
  addTodo: (title: string, description: string) => void;
  removeTodo: (id: number) => void;
  updateTodoState: (id: number, newState: TodoState) => void;
};

const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  addTodo: title =>
    set(state => ({
      todos: [
        ...state.todos,
        { id: Math.random(), title, state: "In Progress" },
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
