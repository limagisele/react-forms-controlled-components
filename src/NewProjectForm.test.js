import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import NewProjectForm from './NewProjectForm'

describe("New Project name", () => {
	it("uses a controlled component and state", () => {
		const { getByTestId} = render(<NewProjectForm setProjects={() =>{}} projects={[]}/>)
		fireEvent.change(getByTestId('project-name'),{target: {value: "project"}})
		expect(getByTestId('name-state')).toHaveTextContent("project")
	})
})

describe("Project description field", () => {
	it("exists", () => {
		const {getByTestId} = render(<NewProjectForm setProjects={() =>{}} projects={[]}/>)
		const form = getByTestId('project-form')
		expect(form.children.length).toBe(3)
		expect(form.children[1]).toHaveAttribute('name','description')
	})
})
describe("New Project Form", () => {
	it("displays a warning when no project name given", () => {
		const {queryByText, getByTestId} = render(<NewProjectForm setProjects={() =>{}} projects={[]}/>)
		fireEvent.click(getByTestId("project-add"))
		const warning = queryByText('You must enter a project name')
		expect(warning).toBeVisible()
	})
	it("does not display a warning when project name given", () => {
		const {queryByText, getByTestId} = render(<NewProjectForm setProjects={() =>{}} projects={[]}/>)
		fireEvent.change(getByTestId('project-name'),{target: {value: "project"}})
		fireEvent.click(getByTestId("project-add"))
		const warning = queryByText('You must enter a project name')
		expect(warning).toBe(null)
	})
})