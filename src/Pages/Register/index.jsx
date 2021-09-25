import RegisterForm from "../../components/RegisterForm"

const Register = ({ authenticated }) => {

	return (

		<div>
			<RegisterForm authenticated={authenticated} />
		</div>
	)
}

export default Register