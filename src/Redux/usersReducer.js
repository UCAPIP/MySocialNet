const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";


let initialState = {
		usersList: [
			{ id: 0, follow: true, name: "Даун Иваныч", status: "Люблю жрать какахи", country: "Россия, ", city: "Москва", age: 26},
			{ id: 1, follow: false, name: "Семен Сперсов", status: "Яйца", country: "Россия, ", city: "Владимир", age: 26},
			{ id: 3, follow: true, name: "Даун Лохыч", status: "Ты лоъх!", country: "Россия, ", city: "Москва", age: 36 }
			]

}

const usersReducer = (state = initialState, action) => {
	
	switch(action.type) {

		case FOLLOW:

		case UNFOLLOW:

		default:
			return state;
	}
}

const followAC = (userId) => ({type: FOLLOW, userId});
const unFollowAC = (userId) => ({type: UNFOLLOW, userId});



export default usersReducer;