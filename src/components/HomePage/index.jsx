import { Redirect } from "react-router-dom"
import Card from "../Card"


const HomePage = ({ authenticated, tech, handleDeleteTech }) => {

	if (!authenticated) {
		return <Redirect to="/" />
	}

	return (
		<div>
			<h1 className="titleTech">Competencias</h1>
			
			{
				tech?.map(item => (
					<div>
						<Card
							id={item.id}
							title={item.title}
							status={item.status}
							handleClick={handleDeleteTech}
						/>
					</div>
				))
			}
		</div>
	)
}

export default HomePage