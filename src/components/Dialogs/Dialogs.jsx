import classes from "./../../css/Dialogs.module.css";
import Contacts from "./Contacts";
import ContactsContainer from "./ContactsContainer";
import Messages from "./Messages";
import MessagesContainer from "./MessagesContainer";



const Dialogs = (props) => {
	
	return (
			<div className={classes.dialogBox}>
			<ContactsContainer store={props.store} />
			<MessagesContainer store={props.store} />
			</div>
	);
}

export default Dialogs;