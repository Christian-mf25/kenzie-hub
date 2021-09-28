import { Button } from "@material-ui/core"
import { MdDeleteForever } from "react-icons/md"
import "./style.css"

const Card = ({ title, status, handleClick, id }) => {

	return (
		<div className="cardTech">
			<p className="nameTech">
				{title}
			</p>

			<p className="statusTech">
				{status}
			</p>

			<Button
				className="removeButton"
				color="info"
				variant="text"
				onClick={() => handleClick(id)}
			>
				<MdDeleteForever 
				className="icon" />
			</Button>


		</div>
	)
}

export default Card