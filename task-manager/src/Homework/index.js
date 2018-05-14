import React, { Component } from 'react';

const Homework = ({assignments, removeAssignment, openEdit}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li id={assignment.id} key={i}>{'NAME: ' + assignment.name} 
					<button  onClick={openEdit}>EDIT</button>
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