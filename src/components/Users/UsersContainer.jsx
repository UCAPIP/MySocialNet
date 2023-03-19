import { connect } from "react-redux"
import Users from "./Users"


let mapStateToProps = (state) => {
	
	return {
		usersData: state.users.usersList
	}
}

let mapDispatchToProps = () => {
	return {}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;