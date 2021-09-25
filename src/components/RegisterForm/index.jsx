import { TextField, Button } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import axios from "axios"

const RegisterForm = () => {

	const history = useHistory()
	
	const schema = yup.object().shape({
		name: yup.string().required("Nome obrigatório"),
		email: yup.string().email("Email inválido").required("Email obrigatório"),
		contact: yup.string().required("Nome de usuário obrigatório").matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "(xx) xxxxx-xxxx"),
		bio: yup.string().required("Campo obrigatório"),
		course_module: yup.string().required("Campo obrigatório"),
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
		axios
			.post("https://kenziehub.herokuapp.com/users", data)
			.then((_) => {
				toast.success("Sucesso ao criar a conta")
				return history.push("/")
			})
			.catch((_) => toast.error("tente outro email"))
	}

	return (

		<form onSubmit={handleSubmit(handleForm)}>

			<div>
				<TextField
					label="Nome"
					color="info"
					size="small"
					variant="outlined"
					margin="normal"
					{...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
				/>

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
					label="Contato"
					color="info"
					size="small"
					variant="outlined"
					margin="normal"
					{...register("contact")}
          error={!!errors.contact}
          helperText={errors.contact?.message}
				/>

				<TextField
					label="Bio"
					color="info"
					size="small"
					variant="outlined"
					margin="normal"
					{...register("bio")}
          error={!!errors.bio}
          helperText={errors.bio?.message}
				/>

				<TextField
					label="Módulos do curso"
					color="info"
					size="small"
					variant="outlined"
					margin="normal"
					{...register("course_module")}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
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

	)
}

export default RegisterForm