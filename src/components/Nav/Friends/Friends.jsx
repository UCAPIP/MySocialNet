import classes from "./../../../css/Nav.module.css";
import Friend from "./Friend";

const Friends = (props) => {
	
	let friendName = props.dataFriends.map( f => 
		<Friend id={f.id} name={f.name}/>);
	
	return (
		<div>
			<h2 className={classes.title}>Друзья</h2>
			<div className={classes.friendBox}>
				{friendName}
			</div>
		</div>
	);
}

export default Friends;