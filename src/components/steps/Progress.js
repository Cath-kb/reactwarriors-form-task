import React from "react"

const Progress = ({ steps, isActive, isDone }) => {
  const getStatusClasses = id => ([
    isActive(id) ? 'active' : '',
    isDone(id) ? 'done' : ''
  ].join(' '))

  return (
    <ol className="steps mb-4">
      {steps.map(step => (
        <li key={step.id} className={`step step-${step.id} ${getStatusClasses(step.id)}`}>
          {step.name}
        </li>
      ))}
    </ol>
  )
}

export default Progress
