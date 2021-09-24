import { yupResolver } from "@hookform/resolvers/yup"
import { TextField } from "@material-ui/core"
import { useForm } from "react-hook-form"


const LoginForm = () => {

	const schema = yup.object().shape({
		username: yup.string().required()
	})

	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

	const handleForm = (data) =>{

	}

	return (
		<div>
			<form onSubmit={handleSubmit()}>
				<TextField
					label="Nome de Usuário"
					color="info"
					size="small"
					variant="outlined"
					margin="normal"
					{...register("username")}
					error={!!errors.username}
					helperText={errors.username?.message}
				/>

				<TextField
					label="Senha"
					color="info"
					size="small"
					variant="outlined"
					margin="normal"
					{...register("password")}
					error={!!errors.password}
					helperText={errors.password?.message}
				/>
			</form>

		</div>
	)
}

export default LoginForm