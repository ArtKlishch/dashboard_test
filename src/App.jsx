import { Routes, Route } from "react-router-dom";
import classes from "./App.module.scss";
import routes from "./routes";
import { useSelector } from "react-redux/es/exports";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute"
import { Select } from "@mantine/core";

function App() {
  const user = useSelector(state => state.user)
  return (
    <main className={classes.App}>
      <Routes>
        <Route element={<PublicRoute user={user} />}>
          <Route path={routes.signin} element={<SignIn />} />
        </Route>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={routes.dashboard} element={<Dashboard />} />
        </Route>
        <Route path={routes.signin} element={<SignIn />} />
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path={routes.profile} element={<Profile />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;
