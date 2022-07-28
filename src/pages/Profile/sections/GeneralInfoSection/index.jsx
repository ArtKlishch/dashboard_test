import DateField from "../../../../components/DateField"
import TextField from "../../../../components/TextField"
import classes from "./GeneralInfoSection.module.scss"
import { ReactComponent as SlackIcon } from "../../../../assets/icons/slack.svg"
import { ReactComponent as GitHubIcon } from '../../../../assets/icons/github.svg'
import { useEffect } from "react"
import { getCurrentAppUser } from "../../../../api"
import { useSelector, useDispatch } from 'react-redux'
import { setUserInfo } from "../../../../redux/actions"
import { findLabel } from "../../../../utils"
import CheckboxField from "../../../../components/CheckboxField"


const GeneralInfoSection = () => {
  const dispatch = useDispatch((state) => state.dispatch)
  const user = useSelector((state) => state.user)
  const userInfo = useSelector((state) => state.userInfo)
  const labels = useSelector((state) => state.labels)
  useEffect(() => {
    if (!userInfo) {
      getCurrentAppUser(user.token)
        .then((res) => dispatch(setUserInfo(res)))
        .catch(console.log)
    }
  }, [dispatch, user.token, userInfo])

  return (
    <div className={classes.GeneralInfoSection}>
      {userInfo && labels && (
        <>
          <div className={classes.GeneralInfoSection__leftSide}>
            <h4 className={classes.GeneralInfoSection__leftSide_title}>
              {findLabel('general-info', labels)}
            </h4>
            <div className={classes.GeneralInfoSection__leftSide_container}>
              <TextField
                label={findLabel('first-name', labels)}
                defaultValue={userInfo.firstName}
                width="223px"
                path="firstName"
                userId={userInfo.appUserID}
              />
              <TextField
                label={findLabel('last-name', labels)}
                placeholder="Last name"
                defaultValue={userInfo.lastName}
                width="223px"
                path="lastName"
                userId={userInfo.appUserID}
              />
              <DateField
                defaultValue={userInfo.dateOfBirth}
                label={findLabel('date-of-birth', labels)}
                width="223px"
                path="dateOfBirth"
                userId={userInfo.appUserID}
              />
            </div>
            <div className={classes.GeneralInfoSection__leftSide_container}>
              <TextField
                label={findLabel('email', labels)}
                placeholder="b.simmons@mail.com"
                width="345px"
                defaultValue={userInfo.email}
                path="email"
                userId={userInfo.appUserID}
              />
              <TextField
                label={findLabel('personal-email', labels)}
                placeholder="b.simmons@mail.com"
                width="345px"
                defaultValue={userInfo.personalEmail}
                path="personalEmail"
                userId={userInfo.appUserID}
                type="email"
              />
              <TextField
                placeholder={findLabel('mobile-phone', labels)}
                width="325px"
                defaultValue={userInfo.mobilePhone}
                path="mobilePhone"
                userId={userInfo.appUserID}
                type="number"
              />
            </div>
            <div className={classes.GeneralInfoSection__leftSide_container}>
              <DateField
                label={findLabel('start-date', labels)}
                width="223px"
                defaultValue={userInfo.startDate}
                path="startDate"
                userId={userInfo.appUserID}
              />
              <TextField
                label={findLabel('absences', labels)}
                width="108px"
                defaultValue={userInfo.absences}
                path="absences"
                userId={userInfo.appUserID}
                type="number"
              />
              <CheckboxField
                label={findLabel('core-team', labels)}
                defaultValue={userInfo.isCoreTeamMember}
                path="isCoreTeamMember"
                userId={userInfo.appUserID}
              />
            </div>
          </div>
          <div className={classes.GeneralInfoSection__rightSide}>
            <div className={classes.GeneralInfoSection__rightSide_container}>
              <h5 className={classes.GeneralInfoSection__rightSide_title}>
                My accounts
              </h5>
              <TextField
                label={findLabel('slack', labels)}
                icon={<SlackIcon />}
                placeholder={findLabel('enter-slack-name', labels)}
                width="345px"
                defaultValue={userInfo.slackUserName}
                path="slackUserName"
                userId={userInfo.appUserID}
              />
              <TextField
                label={findLabel('github', labels)}
                icon={<GitHubIcon />}
                placeholder="Enter your github user name"
                width="345px"
                defaultValue={userInfo.gitHubUserName}
                path="gitHubUserName"
                userId={userInfo.appUserID}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default GeneralInfoSection