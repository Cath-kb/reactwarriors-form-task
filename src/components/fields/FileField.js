import React from "react"

const FileField = ({ label, error, ...props }) => (
  <div className="form-group">
    <div className="custom-file">
      <input
        className={`custom-file-input ${error ? 'is-invalid' : ''}`}
        type="file"
        {...props}
      />
      <div className="custom-file-label">{label}</div>
    </div>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)

export default FileField
