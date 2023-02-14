import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoutes = () => {
  const userId = Cookies.get("user_id");
  let auth = {'loggedIn':userId}
  return (
      auth.loggedIn ? <Outlet /> : <Navigate to= "/signin"/>
  )
} 

export default PrivateRoutes