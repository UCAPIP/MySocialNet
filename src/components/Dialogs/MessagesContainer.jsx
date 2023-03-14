import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogsReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

	let state = props.store.getState();

	let sendMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	let onChangeText = (text) => {
		let textUpdate = updateNewMessageTextActionCreator(text);
		props.store.dispatch(textUpdate);
	}

	return (<Messages sendMessage={sendMessage} onChangeText={onChangeText}
		messagesData={state.dialogs.messageArr} usersDialogs={state.dialogs.newMessageText}/>);
}

export default MessagesContainer;




