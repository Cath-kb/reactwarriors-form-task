import React from 'react'

const Actions = ({ isFirst, isLast, onBack, onNext, onClear }) => (
  <div className="d-flex justify-content-center">
    {!isLast ? (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-light"
          disabled={isFirst}
          onClick={onBack}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-4"
          onClick={onNext}
        >
          Next
        </button>
      </React.Fragment>
    ) : (
      <button
        type="button"
        className="btn btn-primary"
        onClick={onClear}
        >
        Reset
      </button>
    )}
  </div>
)

export default Actions
