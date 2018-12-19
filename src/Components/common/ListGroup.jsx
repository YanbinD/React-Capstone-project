import React from "react";

const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={item === selectedItem ? "list-group-item active" : "list-group-item" }
          style={{cursor: "pointer"}}
          onClick={() => onItemSelect(item)}
        >
          {item[valueProperty]}
        </li>
      ))}
    </ul>
  );
};

// use default props to make props cleaner in the parent
ListGroup.defaultProps = {
  textProperty: "_id",
  valueProperty: "name"
};

export default ListGroup;
