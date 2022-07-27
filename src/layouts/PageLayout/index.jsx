import NavBar from "../../components/NavBar"
import classes from "./PageLayout.module.scss"

const PageLayout = ({ children }) => {
  return (
    <div className={classes.PageLayout}>
      <aside className={classes.PageLayout_leftCol}>
        <NavBar />
      </aside>
      <aside className={classes.PageLayout_rightCol}>{children}</aside>
    </div>
  )
}
 
export default PageLayout