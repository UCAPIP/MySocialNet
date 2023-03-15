import React from "react"
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
	
// 	let state = props.store.getState();
	

// 	let addPost = () => {
// 		props.store.dispatch(addPostActionCreator());
// 	}

// 	let onChangePost = (text) => {
// 		let action = updateNewPostTextActionCreator(text);
// 		props.store.dispatch(action);
// 	}
	
// 	return (<MyPosts updateNewPostText={onChangePost} addPost={addPost} postData={state.profile.postsArr} 
// 		newPostText={state.profile.newPostText} />);
	
// }

let mapStateToProps = (state) => {
	return {
		postData: state.profile.postsArr,
		newPostText: state.profile.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;