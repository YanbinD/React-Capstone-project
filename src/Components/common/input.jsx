import React from 'react';
const Input = (props) => {
    const {name,type, value, onChange, label, error} = props;
    return ( 
        <div className="form-group">
            <label htmlFor={name}> {label} </label>
            <input
              name={name}
              onChange={onChange}
              value={value}
              id={name}
              type={type}
              className="form-control"
            />
            { error && <div className="alert-danger">{error}</div>}
          </div>
     );
}
 
export default Input;