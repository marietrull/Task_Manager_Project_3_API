import React, { Component } from 'react';

const Homework = ({assignments, removeAssignment, editAssignment}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li id={assignment.id} key={i}>{assignment.name} 
					<button  onClick={editAssignment}>EDIT</button>
					<button onClick={removeAssignment}>DELETE</button>
				</li>	
	})

	return(
		<div>
		{homeworkList}
		</div>
	)
}

export default Homework; 