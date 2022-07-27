import classes from "./Profile.module.scss";
import PageLayout from "../../layouts/PageLayout"
import GeneralInfoSection from "./sections/GeneralInfoSection";
import WorkLogSection from "./sections/WorkLogSection";

const Profile = () => {
  return (
    <PageLayout>
      <div className={classes.Profile}>
        <h3 className={classes.Profile__title}>My Profile</h3>
        <GeneralInfoSection/>
        <WorkLogSection />
      </div>
    </PageLayout>
  )
};

export default Profile;
