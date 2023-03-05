let reRenderTree = () => {
}
	
	let state = {
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
		
	}

	export const addPost = () => {
		let newPost = {
			id: 0,
			message: state.profile.newPostText,
			name: "Ivan",
			age: 0,
			countLike:0
		}
		state.profile.postsArr.push(newPost);
		state.profile.newPostText = '';
		reRenderTree(state);
	}

	export const addMessage = () => {
		let newMessage = {
			id: 0,
			message: state.dialogs.newMessageText
		}
		state.dialogs.messageArr.push(newMessage);
		state.dialogs.newMessageText = '';
		reRenderTree(state);
	}

	export const updateNewPostText = (newText) => {
		state.profile.newPostText = newText;
		reRenderTree(state);
		}

	export const updateNewMessageText = (newText) =>{
		state.dialogs.newMessageText = newText;
		reRenderTree(state);
	}
	
	export const subscribe = (observer) => {
		reRenderTree = observer;
	}

	export default state;