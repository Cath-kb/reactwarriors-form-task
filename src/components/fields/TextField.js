import React from "react"

const TextField = ({ title, error, ...props }) => (
  <div className="form-group">
    <label htmlFor={props.id}>{title}</label>
    <input
      className={`form-control ${error ? 'is-invalid' : ''}`}
      {...props}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)

export default TextField
