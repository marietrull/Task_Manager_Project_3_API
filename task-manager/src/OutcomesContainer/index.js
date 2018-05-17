import React, { Component } from 'react';
import Outcome from '../Outcome';
import CreateOutcomeModal from '../CreateOutcomeModal';
import EditOutcomeModal from '../EditOutcomeModal';
import ModalOutcomes from '../ModalOutcomes'


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
			outcomeModalOpen:false,
			outcomeShowing:{},
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


	showOutcomesModal = async (e)=>{

		const outcomeId = e.target.parentNode.id;

		const outcomeJSON = await fetch(`http://localhost:9292/outcome/${outcomeId}`, {
			credentials:'include'
		});


		const outcomeResponse = await outcomeJSON.json();


		this.setState({
			outcomeModalOpen: true,
			outcomeShowing: outcomeResponse.assignment
		});

	}

	closeOutcomeModal = ()=>{
		this.setState({
			outcomeModalOpen: false
		});
	}

	check = async (e) =>{


		const checkJSON = await fetch(`http://localhost:9292/outcome/${this.state.outcomeShowing.id}/check`, {
			method: 'PUT',
			credentials: 'include'
		});

		const checkResp = await checkJSON.json();
		

		if(this.state.outcomeShowing.complete){
			this.setState({outcomeShowing:{...this.state.outcomeShowing, complete: false }});
		}
		else
		{
			this.setState({outcomeShowing:{...this.state.outcomeShowing, complete: true }});
		}


	}


	render () {

		return (

				<div id='homeworkContainer'>
					<ModalOutcomes outcomeModalOpen={this.state.outcomeModalOpen} outcomeShowing={this.state.outcomeShowing} closeOutcomeModal={this.closeOutcomeModal} check={this.check} />
					<Outcome outcomes={this.state.outcomes} openEdit={this.openEdit} showOutcomesModal={this.showOutcomesModal} />
					<button id='addButton'  onClick={this.openAdd}> New Assignment </button>
					<CreateOutcomeModal addAssignment={this.addAssignment} showAdd={this.state.showAdd} closeAddModal={this.closeAddModal}/>
					<EditOutcomeModal showEdit={this.state.showEdit} closeEditModal={this.closeEditModal} removeAssignment={this.removeAssignment} editAssignment={this.editAssignment} editedAssignment={this.state.editedAssignment}/>
				</div>
			)

	}
}


export default OutcomesContainer;