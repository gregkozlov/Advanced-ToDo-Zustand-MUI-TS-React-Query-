import React from "react";
import ToDoList from "../../components/TodoList";
import CreateToDo from "../../components/CreateToDo/CreateToDo";

const Home: React.FC = () => {
  return (
    <>
      <CreateToDo />
      <ToDoList />
    </>
  );
};

export default Home;
