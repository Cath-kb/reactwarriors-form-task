import React from "react"

import { getCitiesByCountry, getCountries } from "./../../utils"
import TextField from "../fields/TextField"
import SelectField from "./../fields/SelectField"

const renderOptions = options => options.map(option => (
    <option key={option.id} value={option.id}>{option.name}</option>
  )
)

const Contacts = props => {
  const { values, errors, onChange } = props
  const countries = getCountries()
  const cities = getCitiesByCountry(values.country)

  return (
    <React.Fragment>
      <TextField
        type="text"
        title="Email"
        placeholder="Enter Email"
        id="email"
        name="email"
        onChange={onChange}
        value={values.email}
        error={errors.email}
      />
      <TextField
        type="text"
        title="Mobile"
        placeholder="Enter Mobile"
        id="mobile"
        name="mobile"
        onChange={onChange}
        value={values.mobile}
        error={errors.mobile}
      />
      <SelectField
        title="Country"
        id="country"
        name="country"
        options={renderOptions(countries)}
        onChange={onChange}
        value={values.country}
        error={errors.country}
      />
      <SelectField
        title="City"
        id="city"
        name="city"
        placeholder="Select city..."
        options={renderOptions(cities)}
        onChange={onChange}
        value={values.city}
        error={errors.city}
      />
    </React.Fragment>
  )
}

export default Contacts
