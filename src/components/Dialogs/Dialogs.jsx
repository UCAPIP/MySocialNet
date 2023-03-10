import classes from "./../../css/Dialogs.module.css";
import Contacts from "./Contacts";
import Messages from "./Messages";



const Dialogs = (props) => {
	return (
			<div className={classes.dialogBox}>
			<Contacts contactsData={props.usersDialogs.contactArr} />
			<Messages messagesData={props.usersDialogs.messageArr} dispatch={props.dispatch} />
			</div>
	);
}

export default Dialogs;