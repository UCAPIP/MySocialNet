import classes from "./../../css/Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts dispatch={props.dispatch} />
			<Posts postData={props.usersPosts.postsArr} />
		</div>
	);
}

export default Profile;