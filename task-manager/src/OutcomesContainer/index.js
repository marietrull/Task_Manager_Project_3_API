import React, { Component } from 'react';
import Outcome from '../Outcome';
import CreateOutcomeModal from '../CreateOutcomeModal';
import EditOutcomeModal from '../EditOutcomeModal';


class OutcomesContainer extends Component {
	constructor (){
		super();

		this.state = {
			outcomes: [],
			showAdd: false,
			showEdit: false,
			editedAssignment: '',
			hwModalOpen: false,
			hwShowing:[],
		}
	}

	componentDidMount(){
	    this.getItems()
	    .then((response) => {
	    	this.setState({outcomes: response.user_assignments})
	    })
	    .catch ((err) => {
	    	console.log(err)
	    })

	}

	getItems = async () => {
	    const outcomesJson = await fetch('http://localhost:9292/outcome', {
	      credentials: 'include'
	    })
	    const outcomes = await outcomesJson.json();
	    return outcomes;
  	}

	openAdd = async (e) => {

  		this.setState({
			showAdd: true
		})
  		
  	}

  	addAssignment = async (name, link, notes) => {

		const outcomes = await fetch('http://localhost:9292/outcome', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				link: link,
				notes: notes
			}),
			credentials: 'include'
		})

		const outcomesParsed = await outcomes.json();

		this.setState({outcomes: [...this.state.outcomes, outcomesParsed.added_assignment]})

		this.setState({
			showAdd: false
		})

	}

  	closeAddModal = () => {
  		
		this.setState({
			showAdd: false
		});
	}

	removeAssignment = async () => {

		const id = this.state.editedAssignment.id

		const removeItem = await fetch('http://localhost:9292/outcome/' + id, {
			method: 'DELETE',
			credentials: 'include'
		});

		const response = await removeItem.json();
		if (response.success){
			this.setState({outcomes: this.state.outcomes.filter((removeItem) => removeItem.id != id)});
		} 

		this.setState({
			showEdit: false
		})
		
	}

	openEdit = (e) => {

		const id = parseInt(e.currentTarget.parentNode.id);

	    const editedAssignment = this.state.outcomes.find((outcome) => {
	      return outcome.id === id 
	    })

	    this.setState({
	      showEdit: true,
	      editedAssignment: editedAssignment
	    })
		
	}

	editAssignment = async (name, link, notes) => {
		const editId = this.state.editedAssignment.id

														// Added syntactic sugar
		const outcome = await fetch(`http://localhost:9292/outcome/${editId}`, {
			method: 'PUT',
			body: JSON.stringify({
				name: name,
				link: link,
				notes: notes
			}),
			credentials: 'include'
		})

		const response = await outcome.json();

		const editedOutcomeIndex = this.state.outcomes.findIndex((outcome) => {

			return outcome.id === response.updated_assignment.id
			
		})		

		const state = this.state;
		state.outcomes[editedOutcomeIndex] = response.updated_assignment;
		state.showEdit = false;
		this.setState(state)

	}

	closeEditModal = () => {
		this.setState({
			showEdit: false
		});
	}


	render () {

		return (

				<div id='homeworkContainer'>
					 <Outcome outcomes={this.state.outcomes} openEdit={this.openEdit}/>
					 <button id='addButton'  onClick={this.openAdd}> New Assignment </button>
					 <CreateOutcomeModal addAssignment={this.addAssignment} showAdd={this.state.showAdd} closeAddModal={this.closeAddModal}/>
					 <EditOutcomeModal showEdit={this.state.showEdit} closeEditModal={this.closeEditModal} removeAssignment={this.removeAssignment} editAssignment={this.editAssignment} editedAssignment={this.state.editedAssignment}/>
				</div>
			)

	}
}


export default OutcomesContainer;