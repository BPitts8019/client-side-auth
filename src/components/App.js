import "./App.css"
import React from "react"
import {Link, Route} from "react-router-dom";

import Signin from "./Signin";
import Account from "./Account";

function App() {
	return (
		<div className="wrapper">
			<nav>
            <Link to="/">Home</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/account">My Account</Link>
         </nav>

         <Route exact path="/signin" component={Signin} />
         <Route exact path="/account" component={Account} />
		</div>
	)
}

export default App
