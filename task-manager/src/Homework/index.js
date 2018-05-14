import React, { Component } from 'react';

const Homework = ({assignments, removeAssignment, editAssignment}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li id={assignment.id} key={i}>{'NAME: ' + assignment.name + ' LINK: ' + assignment.link + ' NOTES: ' + assignment.notes} 
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