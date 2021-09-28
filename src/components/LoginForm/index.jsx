import { Link, useHistory, Redirect } from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import axios from "axios"
import "./style.css"


const LoginForm = ({ setAuthenticated, authenticated }) => {

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

		axios
			.post("https://kenziehub.herokuapp.com/sessions", data)
			.then(response => {

				localStorage.clear()
				setAuthenticated(true)

				toast.success(`Bem vindo, ${response.data.user.name}!`)

				localStorage.setItem("@KenzieHub:token", JSON.stringify(response.data.token))
				localStorage.setItem("@KenzieHub:user", JSON.stringify(response.data.user))
				history.push("/home")
			})
			.catch((_) => toast.error("tente outro email"))
	}

	if (authenticated) {
		return <Redirect to="/home" />
	}

	return (
		<section
			className="containerForm"
		>
			<h1 className="title">KenzieHub</h1>
			<form
				onSubmit={handleSubmit(handleForm)}
				className="login-form-style"
			>

				<div
					className="input-login" >
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
						type="password"
						color="info"
						size="small"
						variant="outlined"
						margin="normal"
						{...register("password")}
						error={!!errors.password}
						helperText={errors.password?.message}
					/>
				</div>

				<div>
					<Button
						className="button-login"
						color="info"
						variant="contained"
						type="submit" >
						Logar
					</Button>
				</div>

			</form>

			<p className="account">
				Não possui conta ainda?
				<Link 
				className="link"
				to="/register">
					Cadastre-se
				</Link>
			</p>



		</section>
	)
}

export default LoginForm