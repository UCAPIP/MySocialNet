import React from "react"
import Post from "./Post";
import classes from "./../../../css/Content.module.css"

const MyPosts = (props) => {

	let postNew = props.postData.map(p =>
		<Post message={p.message} name={p.name} age={p.age} countLike={p.countLike} key={p.id}/>
	);
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		props.addPost();
	}

	let onChangePost = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	
	return (
		<>
			<div className={classes.myPosts}>
				<div>
					<h3>Мои посты:</h3>
					<div className={classes.boxMyPost}>
						<textarea placeholder="Ваш пост..." ref={newPostElement} onChange={onChangePost} value={props.newPostText} />
						<button type="button" onClick={ addPost }>Добавить пост</button>
					</div>
				</div>
			</div>
			<div className={classes.posts}>
				{postNew}
			</div>
		</>
	);
}

export default MyPosts;