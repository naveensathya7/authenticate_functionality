// Write your JS code here

import Cookie from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

const LogoutButton = props => {
  console.log(props)
  const onLogout = () => {
    console.log('cookie removed')
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="bg-container-button">
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
