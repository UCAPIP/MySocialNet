
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
			friendsArr: [
				{id: 0, name: "Идиот"},
				{id: 1, name: "Константин-Евдоким"},
				{id: 2, name: "Бомж"},
				{id: 3, name: "Челикс"},
				{id: 3, name: "Челикс"},
				{id: 3, name: "Челикс"},
				{id: 4, name: "Хуй"}
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
		if (action.type === "ADD-POST") {
			let newPost = {
				id: 0,
				message: this._state.profile.newPostText,
				name: "Ivan",
				age: 0,
				countLike:0
			}
			this._state.profile.postsArr.push(newPost);
			this._state.profile.newPostText = '';
			this._reRenderTree(this._state);
		} else if (action.type === "ADD-MESSAGE") {
				let newMessage = {
				id: 0,
				message: this._state.dialogs.newMessageText
			}
			this._state.dialogs.messageArr.push(newMessage);
			this._state.dialogs.newMessageText = '';
			this._reRenderTree(this._state);
		} else if (action.type === "UPDATE-NEW-POST-TEXT") {
			this._state.profile.newPostText = action.newText;
			this._reRenderTree(this._state);
		} else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
			this._state.dialogs.newMessageText = action.newText;
			this._reRenderTree(this._state);
		}
	}
}

	export default store;
	Window.store = store;