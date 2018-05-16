import React, { Component } from 'react';
import Outcome from '../Outcome';


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


	render () {

		return (

				<div id='homeworkContainer'>
					 <Outcome outcomes={this.state.outcomes}/>

				</div>
			)

	}
}


export default OutcomesContainer;