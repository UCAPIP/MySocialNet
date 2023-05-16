import { NavLink } from "react-router-dom";
import classes from "./../../css/Header.module.css";
import nav from "./../../css/Nav.module.css";

const Header = () => {
	return (
		<header className={classes.header}>
			<h1>Моя Соцсеть</h1>
			<div>
				<NavLink to="/registration" className={navData => navData.isActive ? nav.activeLink : nav.item}>Registration</NavLink>
				<NavLink to="/login" className={navData => navData.isActive ? nav.activeLink : nav.item}>Login</NavLink>
			</div>
		</header>
	);
}

export default Header;