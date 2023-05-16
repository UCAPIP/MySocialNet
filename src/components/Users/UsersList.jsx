import classes from "./../../css/Users.module.css";
import UsersContainer from "./UsersContainer";
import React, { useState } from 'react';

const UsersList = () => {
	return (
		<>
			<div className={classes.title}>
				<h2>Список пользователей</h2>
			</div>
			<UsersContainer />
			
		</>
	)
}

export default UsersList;