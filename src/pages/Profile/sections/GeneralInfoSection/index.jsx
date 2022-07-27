import DateField from "../../../../components/DateField"
import TextField from "../../../../components/TextField"
import classes from "./GeneralInfoSection.module.scss"
import { ReactComponent as SlackIcon } from "../../../../assets/icons/slack.svg"
import { ReactComponent as GitHubIcon } from '../../../../assets/icons/github.svg'
import { useEffect } from "react"
import { getCurrentAppUser } from "../../../../api"
import { useSelector, useDispatch } from 'react-redux'
import { setUserInfo } from "../../../../redux/actions"


const GeneralInfoSection = () => {
  const dispatch = useDispatch((state) => state.dispatch)
  const user = useSelector((state) => state.user)
  const userInfo = useSelector((state) => state.userInfo)

  useEffect(() => {
    getCurrentAppUser(user.token).then((res) => dispatch(setUserInfo(res)))
  }, [dispatch, user.token])

  return (
    <div className={classes.GeneralInfoSection}>
      {userInfo && (
        <>
          <div className={classes.GeneralInfoSection__leftSide}>
            <h4 className={classes.GeneralInfoSection__leftSide_title}>
              General Info
            </h4>
            <div className={classes.GeneralInfoSection__leftSide_container}>
              <TextField
                placeholder="First name"
                label="First name"
                defaultValue={userInfo.firstName}
                width="223px"
                path="firstName"
                userId={userInfo.appUserID}
              />
              <TextField
                label="Last name"
                placeholder="Last name"
                defaultValue={userInfo.lastName}
                width="223px"
                path="lastName"
                userId={userInfo.appUserID}
              />
              <DateField
                defaultValue={userInfo.dateOfBirth}
                label="Date of birth"
                width="223px"
                path="dateOfBirth"
                userId={userInfo.appUserID}
              />
            </div>
            <div className={classes.GeneralInfoSection__leftSide_container}>
              <TextField
                label="Email"
                placeholder="b.simmons@mail.com"
                width="345px"
                defaultValue={userInfo.email}
                path="email"
                userId={userInfo.appUserID}
              />
              <TextField
                label="Personal Email"
                placeholder="b.simmons@mail.com"
                width="345px"
                defaultValue={userInfo.personalEmail}
                path="personalEmail"
                userId={userInfo.appUserID}
              />
              <TextField
                placeholder="Mobile Phone"
                width="325px"
                defaultValue={userInfo.mobilePhone}
                path="mobilePhone"
                userId={userInfo.appUserID}
              />
            </div>
            <div className={classes.GeneralInfoSection__leftSide_container}>
              <DateField
                label="Start Date"
                width="223px"
                defaultValue={userInfo.startDate}
                path="startDate"
                userId={userInfo.appUserID}
              />
              <TextField
                label="Absences"
                width="108px"
                defaultValue={userInfo.absences}
                path="absences"
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
                label="Slack"
                icon={<SlackIcon />}
                placeholder="Enter you slack user name"
                width="345px"
                defaultValue={userInfo.slackUserName}
                path="slackUserName"
              />
              <TextField
                label="Slack"
                icon={<GitHubIcon />}
                placeholder="Enter your github user name"
                width="345px"
                defaultValue={userInfo.gitHubUserName}
                path="gitHubUserName"
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default GeneralInfoSection