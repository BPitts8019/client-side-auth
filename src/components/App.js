import "./App.css";
import React from "react";
import {NavLink, Route, withRouter} from "react-router-dom";
import {getToken} from "../utils/api";

import Signin from "./Signin";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "./Logout";

function App() {
   const signin = getToken();

	return (
		<div className="wrapper">
			<nav>
            <NavLink exact to="/">Home</NavLink>
            {!signin && <NavLink to="/signin">Sign In</NavLink>}
            {signin && <NavLink to="/account">My Account</NavLink>}
            {signin && <NavLink to="/logout">Logout</NavLink>}
         </nav>

         <Route exact path="/signin" component={Signin} />
         <ProtectedRoute exact path="/account" component={Account} />
         <ProtectedRoute exact path="/logout" component={Logout} />
		</div>
	)
}

export default withRouter(App);
