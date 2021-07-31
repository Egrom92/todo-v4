import React from "react";

export default function Filter(props) {
  const { onStatusChange, status } = props;

  return (
    <div className="select">
      <select
        onChange={(e) => onStatusChange(e.target.value)}
        name="todos"
        value={status}
        className="filter-todo"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
