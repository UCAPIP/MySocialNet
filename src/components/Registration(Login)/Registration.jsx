import { useState } from "react";
import { registration } from "../../Actions/User";

const Registration = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<>
			<div>
				<label>Email</label>
				<input onChange={(event) => setEmail(event.target.email)}
				 placeholder="abc@mail.com" value={email} setValue={setEmail}/>
				<small >Help text</small>
			</div>
			<div>
				<label >Password</label>
				<input onChange={(event) => setPassword(event.target.password)}
				 type="password" value={password} setValue={setPassword} />
			</div>
			<button onClick={ () => registration(email, password)}>Login</button>
		</>
	);
}

export default Registration;