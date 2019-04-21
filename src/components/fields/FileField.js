import React from "react"

const FileField = ({ title, error, ...props }) => (
  <div className="form-group">
    <div className="custom-file">
      <input
        className={`custom-file-input ${error ? 'is-invalid' : ''}`}
        type="file"
        {...props}
      />
      <div className="custom-file-label">{title}</div>
    </div>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)

export default FileField
