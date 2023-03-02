import { NavLink } from "react-router-dom";
import classes from "./../../css/Nav.module.css";
import Friends from "./Friends/Friends";


const Nav = (props) => {
	return (
		<div className={classes.nav}>
			<nav>
				<p>
					<NavLink to="/profile" className={navData => navData.isActive ? classes.activeLink : classes.item}>Профиль</NavLink>
				</p>
				<p>
					<NavLink to="/dialogs" className={navData => navData.isActive ? classes.activeLink : classes.item}>Сообщения</NavLink>
				</p>
				<p>
					<NavLink to="/news" className={navData => navData.isActive ? classes.activeLink : classes.item}>Новости</NavLink>
				</p>
				<p>
					<NavLink to="/music" className={navData => navData.isActive ? classes.activeLink : classes.item}>Музыка</NavLink>
				</p>
				<p>
					<NavLink to="/settings" className={navData => navData.isActive ? classes.activeLink : classes.item}>Настройки</NavLink>
				</p>
			</nav>
			<Friends dataFriends={props.navFriends.friendsArr}/>
		</div>
	);
}

export default Nav;