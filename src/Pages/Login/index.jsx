import LoginForm from "../../components/LoginForm"

const Login = ({ authenticated, setAuthenticated }) => {

	return (

		<div>
			<LoginForm
				authenticated={authenticated}
				setAuthenticated={setAuthenticated}
			/>
		</div>
	)
}

export default Login