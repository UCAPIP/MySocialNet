import { connect } from "react-redux"
import { followAC, setUsers, unFollowAC } from "../../Redux/usersReducer"
import User from "./User"


let mapStateToProps = (state) => {
	
	return {
		usersData: state.users.usersList
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId));
		},
		setUser: (usersList) => {
			dispatch(setUsers(usersList));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

