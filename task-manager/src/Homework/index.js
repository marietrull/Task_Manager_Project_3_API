import React, { Component } from 'react';
import './style.css'

const Homework = ({assignments, openEdit}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li className='assignmentList' id={assignment.id} key={i}>{'NAME: ' + assignment.name} 
					<button className='editButton' onClick={openEdit}>EDIT</button>
				</li>	
	})

	return(
		<div id='homeworkShow'>
			{homeworkList}
		</div>
	)
}

export default Homework; 