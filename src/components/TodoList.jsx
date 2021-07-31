import React from "react";
import Todo from "./Todo";

export default function TodoList({
  onDoneToggle,
  onDelete,
  filteredTodos,
  onEdit
}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((toDo) => (
          <Todo
            key={toDo.id}
            toDo={toDo}
            onDelete={() => onDelete(toDo.id)}
            onDoneToggle={() => onDoneToggle(toDo.id)}
            onEdit={(text) => onEdit(toDo.id, text)}
          />
        ))}
      </ul>
    </div>
  );
}
