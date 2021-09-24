import { Switch, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"

const Routes = () => {

	return (
		<Switch>

			<Route exact path="/">
				<Login />
			</Route>

			<Route path="/home">
				<Home />
			</Route>

			<Route path="/register">
				<Register/>
			</Route>

		</Switch>
	)
}

export default Routes