import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Selection from "./Selection";
import SignUpDoctor from "./SignupDoctor";
import SignupUser from "./SignupUser";

const Main = ({ userData, loading }) => {
  return (
    <main>
      <Switch>
        {/* <Route exact path="/admin" component={AdminLogin /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup/Doctor" component={SignUpDoctor} />
        <Route exact path="/signup/User" component={SignupUser} />
        <Route exact path="/" component={Home} />
        <Route exact path="/selection" component={Selection} />
        {/* <Route exact path="/admin/users" component={ShowUsers} />
        <Route
          exact
          path="/profile/:id"
          render={(props) => <ViewProfile {...props} userData={userData} />}
        />
        <Route
          exact
          path="/ads/:id"
          render={(props) => <Post {...props} userData={userData} />}
        />
        <Route exact path={"/login"} component={Login} />
        <Route exact path="/signin" component={Signin} />

        <PrivateRoute
          exact
          path="/postad"
          component={PostAd}
          userData={userData}
        />
        <PrivateRoute
          exact
          path="/myads"
          component={MyAds}
          userData={userData}
        />
        <PrivateRoute
          path={"/profile"}
          component={Profile}
          userData={userData}
        />
        <PrivateRoute
          path={"/editprofile"}
          component={EditProfile}
          userData={userData}
          loading={loading}
        />
        <PrivateHomeRoute path={"/"} component={Home} userData={userData} /> */}
      </Switch>
    </main>
  );
};

export default Main;
