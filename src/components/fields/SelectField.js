import React from "react"

const SelectField = ({ label, placeholder, options, error, ...props }) => (
  <div className="form-group">
    <label htmlFor={props.id}>{label}</label>
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
