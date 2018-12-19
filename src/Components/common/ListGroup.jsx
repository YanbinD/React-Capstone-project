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
          style={{cursor: "pointer"}}
          onClick={() => onItemSelect(item)}
          key={item[textProperty]}
          className={item === selectedItem ? "list-group-item active" : "list-group-item" }
        >
          {item[valueProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "_id",
  valueProperty: "name"
};

export default ListGroup;
