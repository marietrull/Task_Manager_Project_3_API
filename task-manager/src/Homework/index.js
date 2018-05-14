import React, { Component } from 'react';

const Homework = ({assignments, removeAssignment, editAssignment}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li key={i}>{assignment.name} 
					<button id={assignment.i} onClick={editAssignment}>EDIT</button>
					<button id={assignment.i} onClick={removeAssignment}>DELETE</button>
				</li>	
	})

	return(
		<div>
		{homeworkList}
		</div>
	)
}

export default Homework; 