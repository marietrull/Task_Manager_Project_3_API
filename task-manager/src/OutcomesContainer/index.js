import React, { Component } from 'react';
import Outcome from '../Outcome';
import CreateOutcomeModal from '../CreateOutcomeModal';
import EditOutcomeModal from '../EditOutcomeModal';


class OutcomesContainer extends Component {
	constructor (){
		super();

		this.state = {
			outcomes: ['Outcomes 1', 'Outcomes 2', 'Outcomes 3'],
			showAdd: false,
			showEdit: false,
			editedAssignment: '',
			hwModalOpen: false,
			hwShowing:[],
		}
	}

	openAdd = async (e) => {

  		this.setState({
			showAdd: true
		})
  		
  	}

  	closeAddModal = () => {
		this.setState({
			showAdd: false
		});
	}

	openEdit = (e) => {

		console.log('Open Edit Clicked')

		const id = parseInt(e.currentTarget.parentNode.id);

	    const editedAssignment = this.state.outcomes.find((outcome) => {
	      return outcome.id === id 
	    })

	    this.setState({
	      showEdit: true,
	      editedAssignment: editedAssignment
	    })
		
	}


	render () {

		return (

				<div id='homeworkContainer'>
					 <Outcome outcomes={this.state.outcomes} openEdit={this.openEdit}/>
					 <button id='addButton'  onClick={this.openAdd}> New Assignment </button>
					 <CreateOutcomeModal showAdd={this.state.showAdd} closeAddModal={this.closeAddModal}/>
					 <EditOutcomeModal showEdit={this.state.showEdit}/>
				</div>
			)

	}
}


export default OutcomesContainer;