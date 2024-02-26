import React from "react";
import ToDoList from "../../components/TodoList";
import CreateToDo from "../../components/CreateToDo/CreateToDo";
import Search from "../../components/Search";
import { useSearch } from "../../hooks/useSearch";

const Home: React.FC = () => {
  const { filter, setFilter, filteredTodos } = useSearch();

  return (
    <>
      <CreateToDo />
      <Search filter={filter} setFilter={setFilter} />
      <ToDoList filteredTodos={filteredTodos} />
    </>
  );
};

export default Home;
