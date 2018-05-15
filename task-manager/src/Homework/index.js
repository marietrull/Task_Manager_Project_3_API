import React, { Component } from 'react';

const Homework = ({assignments, openEdit, showHWModal}) => {

	const homeworkList = assignments.map((assignment,i) => {
		return <li  id={assignment.id} key={i}><span onClick={showHWModal}>{'NAME: ' + assignment.name}</span> 
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