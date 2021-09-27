import { TextField, Button } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
// import { useState, useEffect } from "react"
// import { toast } from "react-toastify"
import * as yup from "yup"
// import axios from "axios"

const TechnologyForm = ({ technology, handleForm }) => {

	// const [tech, setTech] = useState([])
	// const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")) || "")
	// const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")) || "")

	const schema = yup.object().shape({
		title: yup.string().required("Campo obrigatório"),
		status: yup.string().required("Campo obrigatório")
			.matches(/^([Ii]niciante|[Ii]ntermediário|[Aa]vançado)/, "Iniciante, Intermediário ou Avançado")
	})

	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

	// const handleForm = (data) => {

	// 	axios.post("https://kenziehub.herokuapp.com/users/techs", {
	// 		"title": data.title,
	// 		"status": data.status
	// 	},
	// 		{
	// 			headers: {
	// 				Authorization: `Bearer ${token}`
	// 			}
	// 		})
	// 		.then(response => {
	// 			toast.success("Tecnologia adicionada")
	// 		})
	// 		.catch((e) => toast.error("Esta tecnologia já foi adicionada"))
	// }

	// const loadTech = () => {

	// 	axios.get(`https://kenziehub.herokuapp.com/users/${user.id}`, {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`
	// 		},
	// 		params: {
	// 			name: user.name 
	// 		}
	// 	})
	// 		.then((response) => setTech(response.data.techs))
	// }

	// useEffect(() => {
	// 	loadTech()
	// }, [])

	return (
		<>
			{technology &&
				<div>

					<form onSubmit={handleSubmit(handleForm)}>
						<TextField
							label="Nova tecnologia"
							color="info"
							size="small"
							variant="outlined"
							margin="normal"
							{...register("title")}
							error={!!errors.title}
							helperText={errors.title?.message}
						/>

						<TextField
							label="Status"
							color="info"
							size="small"
							variant="outlined"
							margin="normal"
							{...register("status")}
							error={!!errors.status}
							helperText={errors.status?.message}
						/>

						<Button
							type="submit"
							variant="contained"
							color="info"
						>
							Cadastrar nova tecnologia
						</Button>
					</form>

				</div>

			}

		</>

	)
}

export default TechnologyForm