import React, { Component } from 'react';
import Homework from '../Homework';
import CreateHomework from '../CreateHomework';
import EditHomeworkModal from '../EditHomeworkModal';

class HomeworkContainer extends Component {
	constructor (){
		super();

		this.state = {
			assignments: [],
			showEdit: false,
			editedAssignment: ''
		}
	}

	componentDidMount(){
    this.getItems()
    .then((response) => {
      this.setState({assignments: response.user_assignments})
    })
    .catch ((err) => {
      console.log(err)
    })

	}

	getItems = async () => {
	    const assignmentsJson = await fetch('http://localhost:9292/assignment', {
	      credentials: 'include'
	    })
	    const assignments = await assignmentsJson.json();
	    console.log(assignments, 'assignments getItems')
	    return assignments;
  	}

	addAssignment = async (name) => {
		//add assignment directly to the state

		const assignments = await fetch('http://localhost:9292/assignment', {
			method: 'POST',
			body: JSON.stringify({
				name:name
			}),
			credentials: 'include'
		})

		const assignmentsParsed = await assignments.json();

		console.log(assignmentsParsed, 'assignmentsParsed');

		this.setState({assignments: [...this.state.assignments, assignmentsParsed.added_assignment]})

		return assignmentsParsed;
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
		const id = e.currentTarget.id
		console.log(id, "id in editAssignment")

		// const state = this.state;
		// const editedItem = state.editedAssignment[id];

		// console.log(state, 'state in editAssignment')
		// console.log(editedItem, 'item to be edited')
		// console.log(this.state.showEdit, 'edit status')

		// this.setState({
		// 	showEdit: true,
		// 	editedAssignment: this.state.assignments.id
		// })
		
	}

	closeEdit = (e) => {

		const id = e.currentTarget.id
		console.log(id, "id in closeEdit")

		// //find the index of the movie you're trying to edit
		// const index = this.state.assignments.indexOf(this.state.assignment)

		// console.log(index, 'index close edit')

		// //this is where we actually make the edit
		// //we are mutating the data here --> would need to create a copy of state + mutate that with Object.assign typically to keep it immutable

		// const assignments = this.state.assignments;
		// // assignments[index] = assignment;
		
		
		// console.log(assignments , "this is assignments")


		// //set state
		// this.setState({
		// 	//close the modal
		// 	showEdit: false,
		// 	assignments: assignments,
		// })
		
	}

	render () {
		return (
			<div>
				HOMEWORK CONTAINER
				<Homework assignments={this.state.assignments} removeAssignment={this.removeAssignment} editAssignment={this.editAssignment}/>
				<CreateHomework addAssignment={this.addAssignment} editAssignment={this.editAssignment}/>
				<EditHomeworkModal showEdit={this.state.showEdit} closeEdit={this.closeEdit}/>
			</div>
			)

	}
}


export default HomeworkContainer;