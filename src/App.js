import React, { useState } from 'react'
import { CenteredRow } from './Styled'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'

function App() {
	const [projects, setProjects] = useState([])

	return (
		<div>
			<h1>My Projects</h1>
			<CenteredRow >
				<NewProjectForm projects={projects} setProjects={setProjects} />
			</CenteredRow>
			<CenteredRow >
				<ProjectList projects={projects} />
			</CenteredRow>
		</div>
	)
}

export default App
