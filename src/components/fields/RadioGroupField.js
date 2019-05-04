import React from "react"

const RadioGroupField = ({ label, options, value, error, ...props }) => (
  <div className="form-group">
    <label htmlFor={props.id}>{label}</label>
    {options.map(item => (
      <div className="form-check" key={item.id}>
        <input
          className="form-check-input"
          type="radio"
          id={item.id}
          value={item.id}
          checked={value === item.id}
          {...props}
        />
        <label className="form-check-label" htmlFor={item.id}>
          {item.text}
        </label>
      </div>
      )
    )}
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)

export default RadioGroupField
