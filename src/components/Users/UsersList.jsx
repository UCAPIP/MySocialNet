import classes from "./../../css/Users.module.css";
import UsersContainer from "./UsersContainer";

const UsersList = () => {
	return (
		<>
			<div className={classes.title}>
				<h2>Список пользователей</h2>
			</div>
			<UsersContainer />
			<button className={classes.btnShow}>Показать больше</button>
		</>
	)
}

export default UsersList;