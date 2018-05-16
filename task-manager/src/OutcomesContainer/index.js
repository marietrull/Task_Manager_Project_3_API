import React, { Component } from 'react';


class OutcomesContainer extends Component {
	constructor (){
		super();

		this.state = {
			assignments: [],
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
					 <h1> OUTCOMES CONTAINER </h1>

				</div>
			)

	}
}


export default OutcomesContainer;