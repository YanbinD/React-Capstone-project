import React from "react";

const SearchBox = ({ label, value, onChange }) => {
  return (
      <input
        style={{padding:"10px", width:"100%"}}
        
        type="text"
        name="query"
        onChange={e => onChange(e.currentTarget.value)}
        className="form-control my-3"
        placeholder={label}
        value={value}
      />
  );
};
export default SearchBox;
