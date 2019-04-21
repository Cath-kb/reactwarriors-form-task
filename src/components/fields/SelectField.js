import React from "react"

const SelectField = ({ title, placeholder, options, error, ...props }) => (
  <div className="form-group">
    <label htmlFor={props.id}>{title}</label>
    <select
      className={`form-control ${error ? 'is-invalid' : ''}`}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)

export default SelectField
