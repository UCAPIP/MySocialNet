const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
	postsArr: [
			{ id: 0, message: 'Слова дауна по имени Иван.', name: 'Иван Иванов', age: 23, countLike: 14 },
			{ id: 1, message: 'IDI NHUI LOX.', name: 'GAY DMITROV', age: 5, countLike: 178 },
			{ id: 2, message: 'Да мне похуй', name: 'Сергей Сергеев', age: 31, countLike: 23 }
			],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
		switch (action.type) {
			case ADD_POST: {
				let newPost = {
					id: 0,
					message: state.newPostText,
					name: "Ivan",
					age: 0,
					countLike:0
				};

				let stateCopy = {...state};
				stateCopy.postsArr = [...state.postsArr];

				stateCopy.postsArr.push(newPost)
				stateCopy.newPostText = '';
				return stateCopy;
			}
			case 	UPDATE_NEW_POST_TEXT: {

				let stateCopy = {...state};

				stateCopy.newPostText = action.newText;
				return stateCopy;
			}
			default: 
				return state;
		}
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;