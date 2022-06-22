import React, { useState } from 'react';
import { Input, Card, Button } from './Styled'

function NewProjectForm(props) {
	const initialForm = {
		name: "",
		description: ""
	}
	const [formData, setFormData] = useState(initialForm)
	const [error, setError] = useState(false)

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		console.log(formData)
		event.preventDefault()
		if (formData.name === "" || formData.description === "") {
			(setError(true))
		} else {
			let updatedProjects = [
        		{ name: formData.name, description: formData.description },
        		...props.projects,
      		];
      		props.setProjects(updatedProjects);
      		setFormData({ name: "", description: "" });
		}
	}

	// 3. If Add Project is clicked and no name is given, display a warning message 
	//    above the form that says "You must enter a project name".
	//    Make sure you consult the value in state (not in the DOM) to determine when to display a warning.
	return (
		<div>
			{error && <p>You must enter a project name</p>}
			<Card data-testid="name-state" bgcolor="pink">
				name: {formData.name}
			</Card>
			<Card >
				<form onSubmit={handleSubmit} data-testid="project-form">
					<Input data-testid="project-name" name='name' value={formData.name} type="text" onChange={handleChange}></Input>
					<Input data-testid="project-description" value={formData.description} name='description' type="text" onChange={handleChange}></Input>
					<Button data-testid="project-add">Add Project</Button>
				</form>
			</Card>
		</div>
	);
}

export default NewProjectForm;