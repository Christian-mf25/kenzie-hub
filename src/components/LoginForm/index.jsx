import { Button, TextField, Alert } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import axios from "axios"


const LoginForm = () => {

	const history = useHistory()

	const schema = yup.object().shape({
		email: yup.string().email("Email inválido").required("Email obrigatório"),
		password: yup.string().min(8, "Mínimo de 8 dígitos")
			.matches(
				/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				"Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
			).required("Campo obrigatório")
	})

	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

	const handleForm = (data) => {
		console.log(data)

		axios
			.post("https://kenziehub.herokuapp.com/sessions", data)
			.then(response => {
				console.log(response, data)
				localStorage.clear()
				toast.success(`Bem vindo! ${response.data.user.name}`)
				localStorage.setItem("token", JSON.stringify(response.data.token))
				history.push("/home")
			})
			.catch((e) => toast.error("tente outro email"))
	}

	return (
		<section>

			<form onSubmit={handleSubmit(handleForm)}>

				<div>
					<TextField
						label="Email"
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
				</div>

				<Button
					color="info"
					variant="contained"
					type="submit" >
					Logar
				</Button>

			</form>

			<p>
				Não possui conta ainda? 
				<Link to="/register">
					 Cadastre-se
				</Link>
			</p>



		</section>
	)
}

export default LoginForm