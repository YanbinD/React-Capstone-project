import React from 'react';
const Input = (props) => {
    const {name, value, onChange, label} = props;
    return ( 
        <div className="form-group">
            <label htmlFor={name}> {label} </label>
            <input
              name={name}
              onChange={onChange}
              value={value}
              id={name}
              type="text"
              className="form-control"
            />
          </div>
     );
}
 
export default Input;