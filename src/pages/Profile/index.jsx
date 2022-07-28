import classes from "./Profile.module.scss";
import PageLayout from "../../layouts/PageLayout"
import GeneralInfoSection from "./sections/GeneralInfoSection";
import WorkLogSection from "./sections/WorkLogSection";
import { useSelector } from "react-redux";
import { findLabel } from "../../utils";

const Profile = () => {
  const labels = useSelector(state => state.labels)
  return (
    <PageLayout>
      <div className={classes.Profile}>
        {labels && <h3 className={classes.Profile__title}>{findLabel('my-profile', labels)}</h3>}
        <GeneralInfoSection/>
        <WorkLogSection />
      </div>
    </PageLayout>
  )
};

export default Profile;
