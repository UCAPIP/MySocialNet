import Contacts from "./Contacts"


const ContactsContainer = (props) => {
	debugger;
	let state = props.store.getState();

	return (<Contacts contactsData={state.dialogs.contactArr}/>);
}

export default ContactsContainer;