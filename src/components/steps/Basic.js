import React from "react"

import TextField from "./../fields/TextField"
import RadioGroupField from "./../fields/RadioGroupField"

const genders = [
    {id: 'male', text: 'Male'},
    {id: 'female', text: 'Female'}
]

const Basic = ({ values, errors, onChange }) => (
  <React.Fragment>
    <TextField
      type="text"
      label="First Name"
      placeholder="Enter First Name"
      autoComplete="off"
      id="firstname"
      name="firstname"
      onChange={onChange}
      value={values.firstname}
      error={errors.firstname}
    />
    <TextField
      type="text"
      label="Last Name"
      placeholder="Enter Last Name"
      autoComplete="off"
      id="lastname"
      name="lastname"
      onChange={onChange}
      value={values.lastname}
      error={errors.lastname}
    />
    <TextField
      type="password"
      label="Password"
      placeholder="Enter password"
      autoComplete="new-password"
      id="password"
      name="password"
      onChange={onChange}
      value={values.password}
      error={errors.password}
    />
    <TextField
      type="password"
      label="Repeat password"
      placeholder="Enter repeat password"
      autoComplete="new-password"
      id="repeatPassword"
      name="repeatPassword"
      onChange={onChange}
      value={values.repeatPassword}
      error={errors.repeatPassword}
    />
    <RadioGroupField
      label="Gender"
      name="gender"
      options={genders}
      onChange={onChange}
      value={values.gender}
      error={errors.gender}
    />
  </React.Fragment>
)

export default Basic
