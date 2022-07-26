import { Routes, Route } from "react-router-dom";
import classes from "./App.module.scss";
import routes from "./routes";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <main className={classes.App}>
      <Routes>
        <Route path={routes.signin} element={<SignIn />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.profile} element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
