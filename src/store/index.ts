import { create } from "zustand";
import { persist } from "zustand/middleware";

enum TodoState {
  ToDo = "ToDo",
  InProgress = "In Progress",
  Blocked = "Blocked",
  InQA = "InQA",
  Done = "Done",
  Deployed = "Deployed",
}

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

const listOfNextStatuses = (
  currentStatus: TodoState,
): Array<TodoState> | null => {
  const statusFlow: { [key in TodoState]: Array<TodoState> } = {
    [TodoState.ToDo]: [TodoState.InProgress],
    [TodoState.InProgress]: [TodoState.InQA, TodoState.Blocked],
    [TodoState.Blocked]: [TodoState.ToDo],
    [TodoState.InQA]: [TodoState.ToDo, TodoState.Done],
    [TodoState.Done]: [TodoState.Deployed],
    [TodoState.Deployed]: [],
  };

  return statusFlow[currentStatus] || null;
};
console.log("🚀 ~ listOfNextStatuses:", listOfNextStatuses(TodoState.InQA));

const useTodoStore = create(
  persist<TodoStore>(
    set => ({
      todos: [],
      addTodo: (title, description) =>
        set(state => ({
          todos: [
            ...state.todos,
            {
              id: Math.floor(Math.random() * 10000),
              title,
              description,
              status: TodoState.InProgress,
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
    }),
    {
      name: "todo-localStorage",
    },
  ),
);

export default useTodoStore;
