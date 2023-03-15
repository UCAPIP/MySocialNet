import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogsReducer";
import Messages from "./Messages";


// const MessagesContainer = (props) => {

// 	let state = props.store.getState();

// 	let sendMessage = () => {
// 		props.store.dispatch(addMessageActionCreator());
// 	}

// 	let onChangeText = (text) => {
// 		let textUpdate = updateNewMessageTextActionCreator(text);
// 		props.store.dispatch(textUpdate);
// 	}

// 	return (<Messages sendMessage={sendMessage} onChangeText={onChangeText}
// 		messagesData={state.dialogs.messageArr} usersDialogs={state.dialogs.newMessageText}/>);
// }

let mapStateToProps = (state) => {
	return {
		messagesData: state.dialogs.messageArr,
		usersDialogs: state.dialogs.newMessageText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(addMessageActionCreator());
		},
		onChangeText: (text) => {
			let textUpdate = updateNewMessageTextActionCreator(text);
			dispatch(textUpdate);
		}
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;




