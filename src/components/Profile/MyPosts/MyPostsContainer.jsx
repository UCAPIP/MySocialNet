import React from "react"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	
	let state = props.store.getState();
	

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let onChangePost = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	}
	
	return (<MyPosts updateNewPostText={onChangePost} addPost={addPost} postData={state.profile.postsArr} 
		newPostText={state.profile.newPostText} />);
	
}

export default MyPostsContainer;