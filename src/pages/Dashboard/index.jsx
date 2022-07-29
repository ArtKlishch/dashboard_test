import classes from "./Dashboard.module.scss";
import { ReactComponent as DashboardImg } from "../../assets/images/playground2.svg"
import Button from "../../components/Button"
import PageLayout from "../../layouts/PageLayout";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { getLabels, logoutUser } from "../../api";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setGlobalParameters, setLabels, setUser, setUserInfo, setWorklogs } from "../../redux/actions";
import { findLabel } from "../../utils";
import { useEffect } from "react";

const Dashboard = () => {
  const labels = useSelector((state) => state.labels)
  const user = useSelector(state => state.user)
  const globalParameters = useSelector((state) => state.globalParameters)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavButtonClick = () => {
    navigate(routes.profile)
  }

  useEffect(() => {
    if (!labels && globalParameters) {
      getLabels(globalParameters.defaultLanguageID)
        .then((res) => dispatch(setLabels(res.value)))
        .catch(console.log)
    }
  }, [dispatch, globalParameters, labels])

  const handleLogoutButtonClick = () => {
    logoutUser(user.token).then(() => {
      dispatch(setUser(null))
      dispatch(setUserInfo(null))
      dispatch(setLabels(null))
      dispatch(setGlobalParameters(null))
      dispatch(setWorklogs(null))
    }).catch(console.log)
  }

  return (
    <PageLayout>
      {labels && (
        <div className={classes.Dashboard}>
          <div className={classes.Dashboard__container}>
            <DashboardImg className={classes.Dashboard__image} />
            <h3 className={classes.Dashboard__title}>
              {findLabel('coming-soon', labels)}
            </h3>
            <Button
              extrastyles={classes.Dashboard__navButton}
              onClick={handleNavButtonClick}
            >
              {findLabel('edit-profile-and-worklog', labels)}
            </Button>
            <button
              className={classes.Dashboard__logoutButton}
              onClick={handleLogoutButtonClick}
            >
              {findLabel('logout', labels)}
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  )
};

export default Dashboard
