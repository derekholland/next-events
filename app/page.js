import Button from './component/Button'
import { getUser } from './lib/actions/action'
export default async function Home() {
	// store array of users in variable
	const users = await getUser()
	return (
		<div className="m-2">
			<Button />
			<ul>
				{/* loop over users array and dislplay users to the page */}
				{users.map((user, index) => {
					return <li key={index}>{user.name}</li>
				})}
			</ul>
		</div>
	)
}
