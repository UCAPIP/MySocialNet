import React from "react"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/State";
import classes from "./../../../css/Content.module.css"

const MyPosts = (props) => {
	
	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onChangePost = () => {
		let text = newPostElement.current.value;
		let textUpdate = updateNewPostTextActionCreator(text);
		props.dispatch(textUpdate);
	}
	
	return (
		<div className={classes.myPosts}>
			<div>
				<h3>Мои посты:</h3>
				<div className={classes.boxMyPost}>
					<textarea placeholder="Ваш пост..." wrap="soft" ref={newPostElement} onChange={onChangePost} value={props.newPostText} />
					<button type="button" onClick={ addPost }>Добавить пост</button>
				</div>
			</div>
		</div>
	);
}

export default MyPosts;