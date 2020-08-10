import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toogle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">显示</span>
      <span>{props.name}</span>
      <span className="visually-hidden">任务</span>
    </button>
  );
}
export default FilterButton;
