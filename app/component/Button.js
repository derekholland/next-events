'use client'
import { useState } from 'react'
import { getUser } from '../lib/actions/action'
const Button = () => {
	// create a state
	const [users, setUsers] = useState([])
	// user server action to get users
	async function fetchUser() {
		const users = await getUser()
		setUsers(users)
	}
	return (
		<>
			{/* when the button is clicked the user state gets set, then the ul displays the users based on the state  */}
			<button className="btn btn-primary" onClick={fetchUser}>
				Get Users
			</button>
			<ul className="bg-blue-300">
				{users.map((user, index) => {
					return <li key={index}>{user.name}</li>
				})}
			</ul>
		</>
	)
}
export default Button
