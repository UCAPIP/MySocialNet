import React from "react";
import classes from "./../../css/Dialogs.module.css";
import Message from "./Message";




const Messages = (props) => {
	
	let messageNew = props.messagesData.map(m =>
		<Message id={m.id} message={m.message} />
	);

	let newMessageRef = React.createRef();

	let sendMessage = () => {
		props.addMessage();
	}

	let onChangeText = () => {
		let text = newMessageRef.current.value;
		props.updateNewMessageText(text);
		
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




