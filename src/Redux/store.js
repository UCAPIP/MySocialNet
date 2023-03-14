import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";





let store = {
	
	_state: {
		profile: {
			postsArr: [
			{ id: 0, message: 'Слова дауна по имени Иван.', name: 'Иван Иванов', age: 23, countLike: 14 },
			{ id: 0, message: 'IDI NHUI LOX.', name: 'GAY DMITROV', age: 5, countLike: 178 },
			{ id: 0, message: 'Да мне похуй', name: 'Сергей Сергеев', age: 31, countLike: 23 }
			],
			newPostText: ''	
		},

		dialogs: {
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
		},

		navBar: {
			friendsList: [
			{ id: 0, name: "Даун Иваныч" },
			{ id: 1, name: "Даун Лохыч" }
			]
		}
	},

	_reRenderTree() {
	},
	
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._reRenderTree = observer;
	},
	
	dispatch(action) {
		this._state.profile = profileReducer(this._state.profile, action);
		this._state.dialogs = dialogsReducer(this._state.dialogs, action);
		this._state.navBar = navBarReducer(this._state.navBar, action);
		this._reRenderTree(this._state);
	}
}

	export default store;
	Window.store = store;