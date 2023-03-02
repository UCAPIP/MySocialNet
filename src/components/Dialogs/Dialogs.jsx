import classes from "./../../css/Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import Contacts from "./Contacts";
import Messages from "./Messages";
import Contact from "./Contact";
import Message from "./Message";


const Dialogs = (props) => {
	return (
			<div className={classes.dialogBox}>
			<Contacts contactsData={props.usersDialogs.contactArr}/>
			<Messages messagesData={props.usersDialogs.messageArr}/>
			</div>
	);
}

export default Dialogs;