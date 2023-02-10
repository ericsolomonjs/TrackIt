import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {
  let auth = {'loggedIn':true}
  return (
      auth.loggedIn ? <Outlet /> : <Navigate to= "/signin"/>
  )
} 

export default PrivateRoutes