import { TextField, Button } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import axios from "axios"

const RegisterForm = () => {

	const history = useHistory()

	const schema = yup.object().shape({
		username: yup.string().required("Nome obrigatório"),
		full_name: yup.string().required("Nome de usuário obrigatório"),
		email: yup.string().email("Email inválido").required("Email obrigatório"),
		password: yup.string().min(8, "Mínimo de 8 dígitos")
			.matches(
				/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				"Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
			).required("Campo obrigatório"),
		password_confirm: yup.string().oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
	})

	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

	const handleForm = (data) => {

		console.log(data)
		// axios.post("https://kenziehub.herokuapp.com/users",)
		// 	.then(response => { 
				history.push("/") 
			// })
			// .catch((e) => console.log(e))

	}

	return (

		<div>
			<form onSubmit={handleSubmit(handleForm)}>

				<div>
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
						label="Nome completo"
						color="info"
						size="small"
						variant="outlined"
						margin="normal"
						{...register("full_name")}
						error={!!errors.full_name}
						helperText={errors.full_name?.message}
					/>

					<TextField
						label="Seu melhor email"
						color="info"
						size="small"
						variant="outlined"
						margin="normal"
						{...register("email")}
						error={!!errors.email}
						helperText={errors.email?.message}
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

					<TextField
						label="Confirme sua senha"
						color="info"
						size="small"
						variant="outlined"
						margin="normal"
						{...register("password_confirm")}
						error={!!errors.password_confirm}
						helperText={errors.password_confirm?.message}
					/>
				</div>


				<Button
					type="submit"
					variant="contained"
					color="info">
					Cadastrar-se
				</Button>

			</form>
		</div>
	)
}

export default RegisterForm