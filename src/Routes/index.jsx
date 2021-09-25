import { Switch, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Home from "../Pages/Home"

const Routes = () => {

	const [authenticated, setAuthenticated] = useState(false)

	useEffect(() => {

		const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

		if (token) {
			return setAuthenticated(true)
		}

	}, [authenticated])

	return (
		<Switch>

			<Route exact path="/">
				<Login
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>

			<Route path="/home">
				<Home
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>

			<Route path="/register">
				<Register authenticated={authenticated} />
			</Route>

		</Switch>
	)
}

export default Routes