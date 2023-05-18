import { followAC } from "../../Redux/usersReducer";
import classes from "./../../css/Users.module.css";




let Users = (props) => {

	
	if(props.users.length === 0) {
		props.setUsers([
			{
				id: 1, fullName: 'Ivan', photoUrl: 'https://avatars.mds.yandex.net/i?id=6a77b737706c0786ad060960de6f2aaa98ad5daa-7953198-images-thumbs&n=13',
				followed: false, status: 'Lover of semen', location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 2, fullName: 'Dima', photoUrl: 'https://avatars.mds.yandex.net/i?id=6a77b737706c0786ad060960de6f2aaa98ad5daa-7953198-images-thumbs&n=13',
				followed: true, status: 'Lover of semen', location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 3, fullName: 'Andrey', photoUrl: 'https://avatars.mds.yandex.net/i?id=6a77b737706c0786ad060960de6f2aaa98ad5daa-7953198-images-thumbs&n=13',
				followed: false, status: 'Lover of semen', location: { city: 'Moscow', country: 'Russia' }
			}
		])
	}
	
	
	return <div> 
		{ 
			props.users.map( u => 
				<div key={u.id}>
				<div>
					<img src={u.photoUrl} alt="ava" />
						{u.followed ? <button onClick={() => { props.unFollow(u.id) }} >отписаться</button> : <button onClick={() => { props.follow(u.id) }}>подписаться</button>}
					
				</div>
				<div>
					<h2>{u.fullName}</h2>
					<p>{u.status}</p>
					<h3>{u.location.city}</h3>
					<h3>{u.location.country}</h3>
				</div>
			</div>)
		}
		
	</div>
}


export default Users;