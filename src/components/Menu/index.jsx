import { Toolbar, AppBar, MenuItem, Button, Box, Typography } from "@material-ui/core"
import { useHistory } from "react-router"
import "./style.css"

const Menu = ({ setAuthenticated, setTechnology, technology }) => {

	const history = useHistory()

	const sendTo = (path) => {
		setTechnology(false)
		return history.push(path)
	}

	const handleLogout = () => {
		setAuthenticated(false)
		localStorage.clear()
	}

	const handleShowTechnology = () => {
		setTechnology(!technology)
	}

	return (
		<Box sx={{ flexGrow: 1 }}
		className="nav">
			<AppBar position="static"
				style={{ background: "#07183c" }}
			>
				<Toolbar>

					<MenuItem onClick={() => sendTo("/home")}>
						Home
					</MenuItem>

					<MenuItem onClick={() => handleShowTechnology()} >
						Tecnologias
					</MenuItem>

					<Typography
						fontWeight="bold"
						variant="h4"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						KenzieHub
					</Typography>

					<Button
						className="logoutButton"
						onClick={() => handleLogout()}
						color="inherit"
						size="large">
						Sair
					</Button>
				</Toolbar>

			</AppBar>
		</Box>
	)
}

export default Menu