import countries from "./data/countries"
import cities from "./data/cities"

export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
export const mobileRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

export const filterObjectByKeys = (obj, keys) => (
  Object.keys(obj)
    .filter(key => keys.includes(key))
    .reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {})
)

export const getCountries = () => countries

// convert from data/cities.js format to array of {id, country, name} objects
export const getCities = () => (
  Object.keys(cities)
    .reduce((obj, key) => {
      return [...obj, {id: key, ...cities[key]}]
    }, [])
)

export const getCitiesByCountry = country => (
  getCities().filter(city => city.country.toString() === country.toString())
)

export const getCountryNameById = id => {
  const country = countries.find(country => country.id.toString() === id.toString())
  return country ? country.name : ''
}

export const getCityNameById = id => {
  const city = getCities().find(city => city.id.toString() === id.toString())
  return city ? city.name : ''
}
