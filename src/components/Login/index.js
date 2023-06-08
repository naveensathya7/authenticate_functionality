// Write your JS code here

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const NavtoHome = token => {
    const {history} = props

    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  const getDetails = async () => {
    const details = {username: 'rahul', password: 'rahul@2021'}

    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok === true) {
      NavtoHome(data.jwt_token)
    }
  }

  return (
    <div className="bg-container">
      <h1>Please Login</h1>
      <button onClick={getDetails} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
