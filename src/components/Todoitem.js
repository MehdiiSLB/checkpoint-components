import React from "react";

const Todoitem = (props) => {
  return (
    <div>
      <li>
        {props.data.task}
        <button
          onClick={() =>
            props.delete(props.data.id)
          }
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Todoitem;
