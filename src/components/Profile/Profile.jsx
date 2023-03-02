import classes from "./../../css/Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts />
			<Posts postData={props.usersPosts.postsArr} addPost={props.addPost}/>
		</div>
	);
}

export default Profile;