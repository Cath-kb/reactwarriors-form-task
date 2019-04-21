import React from "react"

import { emailRegex, mobileRegex, filterObjectByKeys } from "./../utils"
import Basic from "./steps/Basic"
import Contacts from "./steps/Contacts"
import Avatar from "./steps/Avatar"
import Finish from "./steps/Finish"
import Progress from "./steps/Progress"
import Actions from "./steps/Actions"

const initialState = {
  values: {
    firstname: '',
    lastname: '',
    password: '',
    repeatPassword: '',
    gender: 'male',
    email: '',
    mobile: '',
    country: "1",
    city: '',
    avatar: '',
  },
  currentStepId: 1,
  statusDone: [],
  errors: {}
}

const steps = [
  {
    id: 1,
    name: 'Basic',
    fields: ['firstname', 'lastname', 'password', 'repeatPassword', 'gender']
  },
  {
    id: 2,
    name: 'Contacts',
    fields: ['email', 'mobile', 'country', 'city']
  },
  {
    id: 3,
    name: 'Avatar',
    fields: ['avatar']
  },
  {
    id: 4,
    name: 'Finish',
    fields: Object.keys(initialState.values)
  }
]

const validate = values => {
  const errors = {}

  if ('firstname' in values && values.firstname.length < 5) {
    errors.firstname = 'Must be 5 characters or more'
  }
  if ('lastname' in values && values.lastname.length < 5) {
    errors.lastname = 'Must be 5 characters or more'
  }
  if ('password' in values && values.password.length < 6) {
    errors.password = 'Must be 6 characters or more'
  }
  if ('repeatPassword' in values && values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Must be equal password'
  }
  if ('gender' in values && !values.gender) {
    errors.gender = 'Required'
  }
  if ('email' in values && !emailRegex.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if ('mobile' in values && !mobileRegex.test(values.mobile)) {
    errors.mobile = 'Invalid mobile'
  }
  if ('country' in values && !values.country) {
    errors.country = 'Required'
  }
  if ('city' in values && !values.city) {
    errors.city = 'Required'
  }
  if ('avatar' in values && !values.avatar) {
    errors.avatar = 'Required'
  }

  return errors
}

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {...initialState}
  }

  onNext = () => {
    const { values, currentStepId } = this.state

    const stepValues = this.getStepValues(values, currentStepId)
    const stepErrors = validate(stepValues)
    const hasErrors = Object.keys(stepErrors).length > 0
    this.setState({ errors: stepErrors })

    if (hasErrors) {
      this.removeStepFromDone(currentStepId)
      return
    }

    this.addStepToDone(currentStepId)
    this.goNextStep()
  }

  onBack = () => {
    this.setState(prevState => ({
      currentStepId: prevState.currentStepId - 1,
      errors: {}
    }))
  }

  onClear = () => {
    this.setState({...initialState})
  }

  onChange = event => {
    const { name, value } = event.target
    const values = {
      ...this.state.values,
      [name]: value.toString()
    }

    if (name === 'country') {
      values.city = ''
    }

    this.setState({values})
  }

  goNextStep = () => {
    this.setState({
      currentStepId: this.state.currentStepId + 1
    })
  }

  addStepToDone = id => {
    const { statusDone } = this.state
    if (!statusDone.includes(id)) {
      this.setState({
        statusDone: [...statusDone, id]
      })
    }
  }

  removeStepFromDone = id => {
    const { statusDone } = this.state
    if (statusDone.includes(id)) {
      this.setState({
        statusDone: statusDone.filter(stepId => stepId !== id)
      })
    }
  }

  isActive = id => (this.state.currentStepId === id)
  isDone = id => this.state.statusDone.includes(id)
  isFirst = () => (this.state.currentStepId === 1)
  isLast = () => (this.state.currentStepId === steps.length)

  getStepValues = (values, stepId) => {
    const step = steps.find(step => step.id === stepId)
    if (!step || !step.fields) return {}
    return filterObjectByKeys(values, step.fields)
  }

  render() {
    const { values, errors, currentStepId } = this.state
    const stepValues = this.getStepValues(values, currentStepId)

    return (
      <div className="form-container card">
        <form className="form card-body">
          <Progress
            steps={steps}
            isActive={this.isActive}
            isDone={this.isDone}
          />
          {currentStepId === 1 && (
            <Basic
              values={stepValues}
              errors={errors}
              onChange={this.onChange}
            />
          )}
          {currentStepId === 2 && (
            <Contacts
              values={stepValues}
              errors={errors}
              onChange={this.onChange}
            />
          )}
          {currentStepId === 3 && (
            <Avatar
              values={stepValues}
              errors={errors}
              onChange={this.onChange}
            />
          )}
          {currentStepId === 4 && (
            <Finish
              values={stepValues}
            />
          )}
          <Actions
            onBack={this.onBack}
            onNext={this.onNext}
            onClear={this.onClear}
            isFirst={this.isFirst()}
            isLast={this.isLast()}
          />
        </form>
      </div>
    )
  }
}
