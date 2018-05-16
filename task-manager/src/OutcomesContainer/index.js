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

	    this.setState({
	      showEdit: true,
	    })
		
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
					 <CreateOutcomeModal showAdd={this.state.showAdd} closeAddModal={this.closeAddModal}/>
					 <EditOutcomeModal showEdit={this.state.showEdit} closeEditModal={this.closeEditModal}/>
				</div>
			)

	}
}


export default OutcomesContainer;