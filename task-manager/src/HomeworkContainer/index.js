import React, { Component } from 'react';
import Homework from '../Homework';
import CreateHomeworkModal from '../CreateHomeworkModal';
import EditHomeworkModal from '../EditHomeworkModal';

class HomeworkContainer extends Component {
	constructor (){
		super();

		this.state = {
			assignments: [],
			showAdd: false,
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
	    return assignments;
  	}

  	openAdd = async (e) => {

  		this.setState({
			showAdd: true
		})

  		console.log(this.state, 'state openAdd')

  		console.log('New Assignment clicked')
  		
  	}

	addAssignment = async (name, link, notes) => {

		const assignments = await fetch('http://localhost:9292/assignment', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				link: link,
				notes: notes
			}),
			credentials: 'include'
		})

		const assignmentsParsed = await assignments.json();

		this.setState({assignments: [...this.state.assignments, assignmentsParsed.added_assignment]})

		this.setState({
			showAdd: false
		})

		console.log(this.state.showAdd, 'showAdd after addAssignment')
	}

	removeAssignment = async () => {
		//Capture the id of the assignment for deletion
		const id = this.state.editedAssignment.id
		console.log(id, 'remove Assignment id')

		const removeItem = await fetch('http://localhost:9292/assignment/' + id, {
			method: 'DELETE',
			credentials: 'include'
		});

		const response = await removeItem.json();
		if (response.success){
			this.setState({assignments: this.state.assignments.filter((removeItem) => removeItem.id != id)});
		} else {
				
		}
		
	}

	openEdit = (e) => {
		// //Make sure button works
		console.log('Edit Clicked')

		// // set id equal to current target id
		const id = parseInt(e.currentTarget.parentNode.id);
		console.log(id, ' id of item for edit')


		//previousSibling.id will give you a string --> not a number
	    //parseInt because our database is looking for a number (we defined this)

	    const editedAssignment = this.state.assignments.find((assignment) => {
	      return assignment.id === id 
	    })

	    console.log(editedAssignment, 'This is the editedItem')

	    this.setState({
	      showEdit: true,
	      editedAssignment: editedAssignment
	    })
		
	}

	editAssignment = async (name, link, notes) => {
		const editId = this.state.editedAssignment.id
		console.log(editId, 'this is edit assignment id')

		console.log(name, 'name in edit assignment')
		console.log(typeof(name), 'type of name')

		const assignment = await fetch('http://localhost:9292/assignment/' + editId, {
			method: 'PUT',
			body: JSON.stringify({
				name: name,
				link: link,
				notes: notes
			}),
			credentials: 'include'
		})

		console.log(this.state, 'state after Edit')

		const response = await assignment.json();

		const editedAssignmentIndex = this.state.assignments.findIndex((assignment) => {

			return assignment.editId == response.updated_assignment.editId
			
		})

		const state = this.state;
		state.assignments[editedAssignmentIndex] = response.updated_assignment;
		state.showEdit = false;
		this.setState(state)

	}


	render () {
		return (
			<div>
				HOMEWORK CONTAINER
				<Homework assignments={this.state.assignments} openEdit={this.openEdit}/>
				<button onClick={this.openAdd}> Add New Assignment </button>
				<CreateHomeworkModal addAssignment={this.addAssignment} openEdit={this.openEdit} showAdd={this.state.showAdd}/>
				<EditHomeworkModal showEdit={this.state.showEdit} editAssignment={this.editAssignment} removeAssignment={this.removeAssignment}/>
			</div>
			)

	}
}


export default HomeworkContainer;