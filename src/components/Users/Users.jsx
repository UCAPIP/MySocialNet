import User from "./User";
import classes from "./../../css/Users.module.css";


const Users = (props) => {

	let userNew = props.usersData.map(u =>
		<User id={u.id} name={u.name} key={u.id} country={u.country} status={u.status} city={u.city} age={u.age}/>
	);

	return (
		<div>
			{userNew}
		</div>
	);
}

export default Users;