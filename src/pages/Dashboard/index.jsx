import classes from "./Dashboard.module.scss";
import { ReactComponent as DashboardImg } from "../../assets/images/playground2.svg"
import Button from "../../components/Button"
import PageLayout from "../../layouts/PageLayout";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { logoutUser } from "../../api";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setUser } from "../../redux/actions";

const Dashboard = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavButtonClick = () => {
    navigate(routes.profile)
  }

  const handleLogoutButtonClick = async () => {
    await logoutUser(user.token)
    dispatch(setUser(null))
  }

  return (
    <PageLayout>
      <div className={classes.Dashboard}>
        <div className={classes.Dashboard__container}>
          <DashboardImg className={classes.Dashboard__image} />
          <h3 className={classes.Dashboard__title}>COMING SOON</h3>
          <Button
            extrastyles={classes.Dashboard__navButton}
            onClick={handleNavButtonClick}
          >
            edit my profile and my worklog
          </Button>
          <button
            className={classes.Dashboard__logoutButton}
            onClick={handleLogoutButtonClick}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </PageLayout>
  )
};

export default Dashboard
