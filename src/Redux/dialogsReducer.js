const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
		contactArr: [
			{ id: 0, name: "Даун Иваныч" },
			{ id: 1, name: "Даун Лохыч" }
			],
		messageArr: [
			{ id: 0, message: "lorem" },
			{ id: 1, message: "Lorem ipsum dolor sit amet." },
			{ id: 3, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nobis mollitia?" }
			],
		newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
		switch (action.type) {
			case ADD_MESSAGE: {
				return {
					...state,
					newMessageText: '',
					messageArr: [...state.messageArr, {id: 0, message: state.newMessageText}]
				};
			}
			case UPDATE_NEW_MESSAGE_TEXT: 
				return {
					...state,
					newMessageText: action.newText
				};
			default: 
				return state;
		}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;