
import classes from "./../../../css/Nav.module.css";
import Friend from "./Friend";

const Friends = (props) => {
	
	let friendName = props.dataFriends.map( f => 
		<Friend id={f.id} name={f.name} key={f.id}/>);

	return (
		<div>
				<div className={classes.title}>
					<h2>Друзья</h2> 
					<button type="button" >Показать</button>
				</div>
			<div className={classes.friendBox}>
				{friendName}
			</div>
		</div>
	);
}

export default Friends;