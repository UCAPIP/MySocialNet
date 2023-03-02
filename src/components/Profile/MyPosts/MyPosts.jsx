import classes from "./../../../css/Content.module.css"

const MyPosts = () => {
	return (
		<div className={classes.myPosts}>
			<div>
				<h3>Мои посты:</h3>
				<div className={classes.boxMyPost}>
					<textarea placeholder="Ваш пост..." wrap="soft"></textarea>
					<button>Добавить пост</button>
				</div>
			</div>
		</div>
	);
}

export default MyPosts;