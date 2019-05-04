import React from "react"

const TextField = ({ label, error, ...props }) => (
  <div className="form-group">
    <label htmlFor={props.id}>{label}</label>
    <input
      className={`form-control ${error ? 'is-invalid' : ''}`}
      {...props}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)

export default TextField
