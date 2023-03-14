import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogsReducer";
import classes from "./../../css/Dialogs.module.css";
import Message from "./Message";




const Messages = (props) => {
	
	let messageNew = props.messagesData.map( m =>
		<Message id={m.id} message={m.message} />
	);

	let newMessageRef = React.createRef();

	let sendMessage = () => {
		props.sendMessage();
	}

	let onChangeText = () => {
		let text = newMessageRef.current.value;
		props.onChangeText(text);
	}

	return (
		<div>
			<h2 className={classes.title}>Чат</h2>
			<div className={classes.bgMessage}>
				{messageNew}
			</div>
			<div className={classes.textArea}>
				<textarea placeholder="Введите ваше сообщение ..." wrap="soft" ref={newMessageRef} value={props.usersDialogs} onChange={onChangeText}></textarea>
				<button onClick={ sendMessage }>Отправить сообщение</button>
			</div>
		</div>
	);
}

export default Messages;




