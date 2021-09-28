import { TextField, Button } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import "./style.css"

const TechnologyForm = ({ technology, handleForm }) => {

	const schema = yup.object().shape({
		title: yup.string().required("Campo obrigatório"),
		status: yup.string().required("Campo obrigatório")
			.matches(/^([Ii]niciante|[Ii]ntermediário|[Aa]vançado)/, "Iniciante, Intermediário ou Avançado")
	})

	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

	return (

		<>

			{technology &&
				<div
					className="createTech" >

					<div
						className="createTechForm">

						<form
							onSubmit={handleSubmit(handleForm)}
							className="formNewTech">

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

				</div>
			}
		</>

	)
}

export default TechnologyForm