
import { connect } from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (state) => {
	return {
		dataFriends: state.navBar.friendsList
	}
}

let mapDispatchToProps = () => {
	return {

	}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;