import classes from "./../../css/Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const Contact = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<NavLink to={path} className={contactA => contactA.isActive ? classes.noActive : classes.yesActive}>
			<div className={classes.contactBox}>
				<img src="https://yandex-images.clstorage.net/D97ylZ419/ca1b0fWDRp3/Y2V2P_lR-PQpaY-uhH7n18fOZSAoy2MP0I-_0yTS1mKOos1KdGzyQ7YunCcF6YKl82pEnKqFY_yZZYvwkV-aZKKgpS6oVy4huewarIS_p1CQnqFnPkp0SUAYvEEmxZdiDmZYXyVuZkVkbJwpiqBe-Ok3nYP1WT2uzbAeJUPNXres76Z1_ot9-2A4iuaC9G8SnMBgZDvKcsQSXb_LNUMN_dm1mVhkvSTCKLMNqsjk3ztleRSCtZU9rQGy06GFG9b6p6Q_MfEDsDjg-4DujPolnJyNqKb_QPXBUxi_h_xPzbyXNNFeYrRqCOF-hKpPblO1JLBYxX0eOu4HMBSuw1ZQ8qgrv_l9wLe-5XfEbgMzJtuUw-Lmd80yT1EasQO2gAD7njuUWGp6504ltwliCWna_CV130r9mHgoz3ZV4YRaFH9qqDW38AB6d2U-wqqJteRbnAdlIPkHOkgUmroEcYUCdt-22pAhM-pI47VBooZt23RucJ3C8hny4oy4H6hJEJ7-aeuwczcE8LtgNoKjzzOjWFAPYKX2BPjHk1E_xnuAizOXfxuULDhlQmx5weoFIhY0bPgfDffbu-1ON5pshxsZN20mMDp4hjP5ZHlK4g3zaBqdwafpfol9DlTaOoy8Qkq3lnuV36R84sihM4isiytc8CO1VYX20rUqTDAV7ghd0fblorP_dcE9-eB5j-5ON2jX2Q0nYXkL_o1YFDwG8IRMu1C_Hp8reiRNIviDKwNtWD1kftoC_150oY8zV2HMWp93Ku7_tfaP_v2kP09iSnzu218AYmkyAPEEmJH_yDaHBTPR9FxeJbnlAy03Sm3J5NezJPZYw7kaNO0FvpEiQNuWd6Ip_DdzCvk-67gE6EV3YpUdSSTnMIW6iVLSdEi8zsU8mfcTXmD7LEqmOs3kheETsq922sf3ErxhTvBf4kEWWvnh4z-_f8AxtqQzi-RB8WbfXg0n4DgM9sUc0fYLvY" alt="avatarUser" />
				<p className={classes.item}>
					{props.name}
				</p>
			</div>
		</NavLink>
	);
}

export default Contact;