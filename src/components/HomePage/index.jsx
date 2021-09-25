import { Redirect } from "react-router-dom"

const HomePage = ({ authenticated }) => {


	if (!authenticated) {
		return <Redirect to="/" />
	}

	return (
		<div>
			<p>wegerg</p>
			<p>rgwereqg</p>
			<p>aqrgheqrg</p>
		</div>
	)
}

export default HomePage