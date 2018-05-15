import React, { Component } from 'react';

const Homework = ({assignments, openEdit, showHWModal}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li onClick={showHWModal} id={assignment.id} key={i}>{'NAME: ' + assignment.name} 
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