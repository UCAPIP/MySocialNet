import React from "react"
import classes from "./../../../css/Content.module.css"

const MyPosts = (props) => {
	
	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	}
	
	return (
		<div className={classes.myPosts}>
			<div>
				<h3>Мои посты:</h3>
				<div className={classes.boxMyPost}>
					<textarea placeholder="Ваш пост..." wrap="soft" ref={newPostElement}></textarea>
					<button onClick={ addPost }>Добавить пост</button>
				</div>
			</div>
		</div>
	);
}

export default MyPosts;