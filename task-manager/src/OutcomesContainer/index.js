import React, { Component } from 'react';
import Outcome from '../Outcome';
import CreateOutcomeModal from '../CreateOutcomeModal';


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


	render () {

		return (

				<div id='homeworkContainer'>
					 <Outcome outcomes={this.state.outcomes}/>
					 <button id='addButton'  onClick={this.openAdd}> New Assignment </button>
					 <CreateOutcomeModal showAdd={this.state.showAdd} closeAddModal={this.closeAddModal}/>
				</div>
			)

	}
}


export default OutcomesContainer;