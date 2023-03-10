const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
	postsArr: [
			{ id: 0, message: 'Слова дауна по имени Иван.', name: 'Иван Иванов', age: 23, countLike: 14 },
			{ id: 0, message: 'IDI NHUI LOX.', name: 'GAY DMITROV', age: 5, countLike: 178 },
			{ id: 0, message: 'Да мне похуй', name: 'Сергей Сергеев', age: 31, countLike: 23 }
			],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
		switch (action.type) {
			case ADD_POST: 
				let newPost = {
					id: 0,
					message: state.newPostText,
					name: "Ivan",
					age: 0,
					countLike:0
				}
				state.postsArr.push(newPost);
				state.newPostText = '';
				return state;
			case 	UPDATE_NEW_POST_TEXT:
				state.newPostText = action.newText;
				return state;
			default: 
				return state;
		}
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;