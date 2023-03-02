import classes from "./../../../css/Content.module.css";
import Post from "./Post";

const Posts = (props) => {
	
	let postNew = props.postData.map(p =>
		<Post message={p.message} name={p.name} age={p.age} countLike={p.countLike} />
	);
	
	return (
		<div className={classes.posts}>
			{postNew}
		</div>
	);
}

export default Posts;