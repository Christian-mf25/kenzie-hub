import { Toolbar, AppBar, MenuItem, Button, Box, Typography } from "@material-ui/core"
import { useHistory } from "react-router"

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
		console.log(technology)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
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