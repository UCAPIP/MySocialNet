import classes from "./../../css/Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import Contact from "./Contact";



const Contacts = (props) => {
	
	let contactNew = props.contactsData.map(c =>
		<Contact id={c.id} name={c.name} key={c.id}/>
	);
	
	return (
		<div>
			<h2 className={classes.title} >Контакты</h2>
			<div>
					{contactNew}
			</div>
		</div>
	);
}

export default Contacts;
