import React, { Component } from 'react';
import Homework from '../Homework';
import CreateHomework from '../CreateHomework';
import Modal from '../EditHomework';

class HomeworkContainer extends Component {
	constructor (){
		super();

		this.state = {
			assignments: ['Homework 1', 'Homework 2', 'Homework 3', 'Homework 4'],
			showEdit: false,
			editedAssignment: ''
		}
	}

	addAssignment = (assignment, e) => {
		//add assignment directly to the state
		this.setState({assignments: [...this.state.assignments, assignment]})	
	}

	removeAssignment = (e) => {
		//Capture the id of the assignment for deletion
		const id = e.currentTarget.id
		//Filter through assignments and omit the item associated with the id
		this.setState({assignments: this.state.assignments.filter((assignment, i) => i != id)})
		
	}

	editAssignment = (e) => {
		//Make sure button works
		console.log('Edit Clicked')

		// set id equal to current target id
		const id = e.currentTarget.previousSibling.id
		console.log(id)

		this.setState({
			showEdit: true,
			editedAssignment: this.state.assignments[id]
		})
	}

	closeEdit = (assignment) => {

		//find the index of the movie you're trying to edit
		const index = this.state.assignments.indexOf(this.state.editedAssignment)

		console.log(index, 'index closeedit')

		//this is where we actually make the edit
		//we are mutating the data here --> would need to create a copy of state + mutate that with Object.assign typically to keep it immutable

		const assignments = this.state.assignments;
		assignments[index] = assignment;
		
		
		console.log(assignments , "this is assignments")


		//set state
		this.setState({
			//close the modal
			showEdit: false,
			assignments: assignments,
		})
		
	}

	render () {
		return (
			<div>
				HOMEWORK CONTAINER
				<Homework assignments={this.state.assignments} removeAssignment={this.removeAssignment} editAssignment={this.editAssignment}/>
				<CreateHomework addAssignment={this.addAssignment} editAssignment={this.editAssignment}/>
				<Modal showEdit={this.state.showEdit} closeEdit={this.closeEdit}/>
			</div>
			)

	}
}


export default HomeworkContainer;