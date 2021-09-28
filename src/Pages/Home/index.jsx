import TechnologyForm from "../../components/TechnologyForm"
import HomePage from "../../components/HomePage"
import { useState, useEffect } from "react"
import Menu from "../../components/Menu"
import { toast } from "react-toastify"
import axios from "axios"
import "./style.css"

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
				loadTech()
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
			.then((response) =>{
				setTech(response.data.techs)
			} )

	}

	const handleDeleteTech = (id) => {
		const filterTech = tech.filter((item) => item.id !== id)

		axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(_ => setTech(filterTech))
	}

	useEffect(() => {
		loadTech()
	}, [])

	return (


		<section className="homePage">

			<Menu
				setAuthenticated={setAuthenticated}
				setTechnology={setTechnology}
				technology={technology}
			/>

			<HomePage
				authenticated={authenticated}
				setTechnology={setTechnology}
				handleDeleteTech={handleDeleteTech}
				tech={tech}
			/>

			<TechnologyForm
				technology={technology}
				handleForm={handleForm}
			/>

		</section>
	)
}

export default Home