import React, { Component } from 'react';
import Homework from '../Homework';

class HomeworkContainer extends Component {
	constructor (){
		super();

		this.state = {
			assignments: ['Homework 1', 'Homework 2', 'Homework 3', 'Homework 4']
		}
	}

	removeAssignment = (e) => {
		//Capture the id of the assignment for deletion
		const id = e.currentTarget.id
		//Filter through assignments and omit the item associated with the id
		this.setState({assignments: this.state.assignments.filter((assignment, i) => i != id)})
		
	}

	render () {
		return (
			<div>
				HOMEWORK CONTAINER
				<Homework assignments={this.state.assignments} removeAssignment={this.removeAssignment}/>
			</div>
			)

	}
}


export default HomeworkContainer;