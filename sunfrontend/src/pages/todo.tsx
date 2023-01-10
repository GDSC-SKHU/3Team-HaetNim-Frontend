import TodoList from "../components/TodoList";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function Todo() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <TodoList />
      <Calendar onChange={onChange} value={value} />{" "}
    </>
  );
}
