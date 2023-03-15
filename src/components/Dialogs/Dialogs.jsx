import classes from "./../../css/Dialogs.module.css";
import ContactsContainer from "./ContactsContainer";
import MessagesContainer from "./MessagesContainer";



const Dialogs = (props) => {
	
	return (
			<div className={classes.dialogBox}>
			<ContactsContainer />
			<MessagesContainer />
			</div>
	);
}

export default Dialogs;