import { useState } from "react";
import useTodoStore from "../store";

export const useSearch = () => {
  const { todos } = useTodoStore();

  const [filter, setFilter] = useState("");

  const filteredTodos = todos.filter(item => {
    return item.title.includes(filter.toLowerCase());
  });

  return { filter, setFilter, filteredTodos };
};
