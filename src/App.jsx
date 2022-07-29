import { Routes, Route, Navigate } from "react-router-dom";
import classes from "./App.module.scss";
import routes from "./routes";
import { useSelector } from "react-redux/es/exports";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <main className={classes.App}>
      {!user ? (
        <Routes>
          <Route path={routes.signin} element={<SignIn />} />
          <Route path="*" element={<Navigate to={routes.signin} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.profile} element={<Profile />} />
          <Route
            path="*"
            element={<Navigate to={routes.dashboard} replace />}
          />
        </Routes>
      )}
    </main>
  );
}
export default App;
