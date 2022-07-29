import classes from "./Profile.module.scss";
import PageLayout from "../../layouts/PageLayout"
import GeneralInfoSection from "./sections/GeneralInfoSection";
import WorkLogSection from "./sections/WorkLogSection";
import { useDispatch, useSelector } from "react-redux";
import { findLabel } from "../../utils";
import { getLabels } from "../../api";
import { useEffect } from "react";
import { setLabels } from "../../redux/actions";

const Profile = () => {
  const dispatch = useDispatch()
  const globalParameters = useSelector((state) => state.globalParameters)
  const labels = useSelector(state => state.labels)

  useEffect(() => {
    if (!labels && globalParameters) {
      getLabels(globalParameters.defaultLanguageID)
        .then((res) => dispatch(setLabels(res.value)))
        .catch(console.log)
    }
  }, [dispatch, globalParameters, labels])

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
