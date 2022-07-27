import { NavLink, useLocation } from "react-router-dom"
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger.svg"
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import classes from "./NavBar.module.scss"

const NavBar = () => {
    const { pathname } = useLocation()

  return (
    <div className={classes.NavBar}>
      <button className={classes.NavBar__burgerButton}>
        <BurgerIcon />
      </button>
      <NavLink to="/dashboard" className={classes.NavBar__navLinks}>
        <DashboardIcon
          fill={pathname === '/dashboard' ? 'white' : '#95A2A7'}
        />
      </NavLink>
      <NavLink to="/profile" className={classes.NavBar__navLinks}>
        <ProfileIcon fill={pathname === '/profile' ? 'white' : '#95A2A7'} />
      </NavLink>
    </div>
  )
}

export default NavBar