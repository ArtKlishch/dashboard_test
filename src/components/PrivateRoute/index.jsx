import { Outlet, Navigate } from 'react-router-dom'
import routes from '../../routes'

const PrivateRoute = ({ user }) => {

  return user ? <Outlet /> : <Navigate to={routes.signin}/>
}

export default PrivateRoute