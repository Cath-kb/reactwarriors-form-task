import React from "react"

import { getCountryNameById, getCityNameById } from "./../../utils"

const Finish = props => {
  const { values } = props
  const { avatar, firstname, lastname, email, mobile, country, city } = values

  return (
    <div className="container">
      <div className="row align-items-center mb-4">
        <div className="col-4">
          <img src={avatar} className="img-fluid w-100" alt="User Avatar" />
        </div>
        <div className="col">
          <p className="h4">{firstname} {lastname}</p>
        </div>
      </div>
      <div className="mb-4">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>
        <p><strong>Location:</strong> {getCountryNameById(country)}, {getCityNameById(city)}</p>
      </div>
    </div>
  )
}

export default Finish
