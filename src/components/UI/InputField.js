import React from 'react';
import {FormControl, FormLabel} from 'react-bootstrap';

const InputField = (props) => {
    return (
  <div className="form-group">
      <FormLabel>{props.title}</FormLabel>
      <FormControl
            type={props.type}
            id={props.name}
            name={props.name}
            value={props.value}
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.handleChange}
            isInvalid={Boolean(props.errors[props.name])}
          />

      {props.errors && props.errors[props.name] && (
          <FormControl.Feedback type="invalid">
                 {props.errors[props.name].map((error, index) => ( 
                     <div key={`field-error-${props.name}-${index}`} className="fieldError">{error}</div>
                 ))} 
          </FormControl.Feedback>
      )}
  </div>
    )
};

export default InputField;