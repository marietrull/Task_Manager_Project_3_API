import React, { Component } from 'react';

class HomeworkContainer extends Component {
	constructor (){
		super();

		this.state = {
			assignments: ['Homework 1', 'Homework 2', 'Homework 3', 'Homework 4']
		}
	}

	render () {
		return (
			<div>
				HOMEWORK CONTAINER
			</div>
			)

	}
}


export default HomeworkContainer;