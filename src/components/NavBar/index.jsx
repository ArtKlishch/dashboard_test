import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import { refreshToken } from "../../api"
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger.svg"
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh.svg'
import { setUser } from "../../redux/actions"
import classes from "./NavBar.module.scss"
import routes from "../../routes"

const NavBar = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const user = useSelector((state) => state.user)
  
  const handleRefreshButtonClick = () => {
    refreshToken(user).then((res) => dispatch(setUser(res)))
  }

  return (
    <div className={classes.NavBar}>
      <button className={classes.NavBar__burgerButton}>
        <BurgerIcon />
      </button>
      <NavLink to={routes.dashboard} className={classes.NavBar__navLinks}>
        <DashboardIcon fill={pathname === routes.dashboard ? 'white' : '#95A2A7'} />
      </NavLink>
      <NavLink to={routes.profile} className={classes.NavBar__navLinks}>
        <ProfileIcon fill={pathname === routes.profile ? 'white' : '#95A2A7'} />
      </NavLink>
      <button
        className={classes.NavBar__refreshButton}
        onClick={handleRefreshButtonClick}
      >
        <RefreshIcon />
      </button>
    </div>
  )
}

export default NavBar