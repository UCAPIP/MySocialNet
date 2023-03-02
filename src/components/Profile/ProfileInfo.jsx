import classes from "./../../css/Content.module.css";

const ProfileInfo = () => {
	return (
		<div className={classes.avaDescription}>
			<img src='https://avatars.mds.yandex.net/i?id=89f186c6bb9fbdbb701e54757382afbb276a683f-4571959-images-thumbs&n=13&exp=1' alt='ava' />
			<div>
				<h2>Бакураев Илья</h2>
				<p>Возраст:</p>
				<p>Род деятельности:</p>
				<p>Статус:<span className={classes.status}> Хуй сосал и селедкой пахло...</span></p>
			</div>
		</div>
	);
}

export default ProfileInfo;



