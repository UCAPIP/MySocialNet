import { connect } from "react-redux";
import Contacts from "./Contacts"


// const ContactsContainer = (props) => {
	
// 	let state = props.store.getState();

// 	return (<Contacts contactsData={state.dialogs.contactArr}/>);
// }

let mapStateToProps = (state) => {
	return {
		contactsData: state.dialogs.contactArr
	}
}

let mapDispatchToProps = () => {
	return {

	}
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;