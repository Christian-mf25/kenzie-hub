import TechnologyForm from "../../components/TechnologyForm"
import HomePage from "../../components/HomePage"
import Menu from "../../components/Menu"

import axios from "axios"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"


const Home = ({ authenticated, setAuthenticated }) => {

	const [technology, setTechnology] = useState(false)
	const [tech, setTech] = useState([])

	const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")) || "")
	const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")) || "")


	const handleForm = (data) => {

		axios.post("https://kenziehub.herokuapp.com/users/techs", {
			"title": data.title,
			"status": data.status
		},
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(_ => {
				toast.success("Tecnologia adicionada")
				console.log(tech)
			})
			.catch((_) => toast.error("Esta tecnologia já foi adicionada"))
	}

	const loadTech = () => {

		axios.get(`https://kenziehub.herokuapp.com/users/${user.id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			},
			params: {
				name: user.name
			}
		})
			.then((response) => setTech(response.data.techs))
	}

	useEffect(() => {
		loadTech()
	}, [])

	return (


		<div>

			<Menu
				setAuthenticated={setAuthenticated}
				setTechnology={setTechnology}
				technology={technology}
			/>

			<HomePage
				authenticated={authenticated}
				setTechnology={setTechnology}
				tech={tech}
			/>

			<TechnologyForm
				technology={technology}
				handleForm={handleForm}
			/>

		</div>
	)
}

export default Home