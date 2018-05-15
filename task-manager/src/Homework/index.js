import React, { Component } from 'react';

const Homework = ({assignments, openEdit}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li id={assignment.id} key={i}>{'NAME: ' + assignment.name} 
					<button  onClick={openEdit}>EDIT</button>
				</li>	
	})

	return(
		<div>
			{homeworkList}
		</div>
	)
}

export default Homework; 