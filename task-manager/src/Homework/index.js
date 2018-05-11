import React, { Component } from 'react';

const Homework = ({assignments, removeAssignment}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li key={i}>{assignment} 
					<button id={i}>EDIT</button>
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