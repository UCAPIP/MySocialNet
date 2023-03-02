import classes from "./../../css/Dialogs.module.css";
import Message from "./Message";




const Messages = (props) => {
	
	let messageNew = props.messagesData.map(m =>
		<Message id={m.id} message={m.message} />
	);

	return (
		<div>
			<h2 className={classes.title}>Чат</h2>
			<div className={classes.bgMessage}>
				{messageNew}
			</div>
		</div>
	);
}

export default Messages;




