import React, { Component } from 'react';

const Homework = ({assignments, removeAssignment, editAssignment}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li key={i}>{assignment} 
					<button id={i} onClick={editAssignment}>EDIT</button>
					<button id={i} onClick={removeAssignment}>DELETE</button>
				</li>	
	})

	return(
		<div>
		{homeworkList}
		</div>
	)
}

export default Homework; 