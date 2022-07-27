import routes from "../../routes"
import {Navigate, Outlet} from "react-router-dom"

const PublicRoute = ({user}) => {
  return user ? <Navigate to={routes.dashboard}/> : <Outlet />
}

export default PublicRoute