import React from 'react';

// due to the repeatitave pattern for the input tag, 
// the spread attritubes can be used to symplify the syntax
// only keep name, label, error as they were not used within the input tag
// the ...rest will include any other property other than the specified ones 
const Input = ({name, label, error, ...rest}) => {
    // const {name, label, error, ...rest} = props;
    return ( 
        <div >
            <label htmlFor={name}> {label} </label>
            <input
              {...rest}
              id={name}
              name={name}
              className="form-control"
              type="text"
            />
            { error && <div className="alert-danger">{error}</div>}
          </div>
     );
}

 
export default Input;