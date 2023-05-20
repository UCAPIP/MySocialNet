import axios from "axios";
import { followAC } from "../../Redux/usersReducer";
import classes from "./../../css/Users.module.css";
import userPhoto from "../../img/userMale.png";



let Users = (props) => {

	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				props.setUsers(response.data.items);
			})
		}
	}
	
	
	return <div className={classes.main}>
		<h1 className={classes.title}>Список пользователей</h1> 
		{ 
			props.users.map( u => 
				<div key={u.id} className={classes.item}>
					<div className={classes.avabtn}>
						<img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="ava" className={classes.userAvatar} />
						<p>
							{u.followed ? <button className={classes.avabtnUnfollowed} onClick={() => { props.unFollow(u.id) }} >вы подписаны</button> : <button className={classes.avabtnFollowed} onClick={() => { props.follow(u.id) }}>подписаться</button>}
						</p>
					</div>
					<div>
						<h2>{u.name}</h2>
						<p>{u.status}</p>
						<h3>{'u.location.city'}</h3>
						<h3>{'u.location.country'}</h3>
					</div>
				</div>)
		}
		<button className={classes.btnShowUsers} onClick={getUsers}>Показать пользователей</button>
	</div>
}


export default Users;