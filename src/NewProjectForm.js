import React, { useState } from 'react';
import { Input, Card, Button } from './Styled'

function NewProjectForm({ projects, setProjects }) {
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [warning, setWarning] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (name != "") {
			setProjects([{ name, description }, ...projects])
			setName("")
		} else {
			setWarning(true)
		}
	}

	return (
		<div>
			<Card data-testid="name-state" bgcolor="pink">
				name: {name}
			</Card>
			<Card >
				{warning && <p>You must enter a project name</p>}
				<form onSubmit={handleSubmit} data-testid="project-form">
					<Input onChange={e => setName(e.target.value)} data-testid="project-name" type="text" ></Input>
					<Input onChange={e => setDescription(e.target.value)} data-testid="project-description" name="description" type="text" ></Input>
					<Button data-testid="project-add">Add Project</Button>
				</form>
			</Card>
		</div>
	);
}

export default NewProjectForm;