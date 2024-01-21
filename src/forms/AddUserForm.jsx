import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		> 
			<div className="container">
				<div className="row">
					<label>Name</label> <br/>
					<input type="text" name="name" value={user.name} onChange={handleInputChange} className='input' /> <br/>
				</div>

				<div className="row">
					<label>Product Name</label> <br/>
					<input type="text" name="username" value={user.username} onChange={handleInputChange} className='input'/> <br/>
				</div>
			</div>
			
			 <br />
			<button className='btn btn-primary'>Add new user</button>
		</form>
	)
}

export default AddUserForm