import TechnologyForm from "../../components/TechnologyForm"
import HomePage from "../../components/HomePage"
import Menu from "../../components/Menu"
import { useState } from "react"


const Home = ({ authenticated, setAuthenticated }) => {

	const [technology, setTechnology] = useState(false)

	return (


		<div>

			<Menu
				setAuthenticated={setAuthenticated}
				setTechnology={setTechnology}
				technology={technology}
			/>

			<HomePage authenticated={authenticated} />

			<TechnologyForm technology={technology} />

		</div>
	)
}

export default Home