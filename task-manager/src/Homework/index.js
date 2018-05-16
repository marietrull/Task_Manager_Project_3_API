import React from 'react';
import './style.css'

const Homework = ({assignments, openEdit, showHWModal}) => {

	const homeworkList = assignments.map((assignment,i) => {

		return <li className='assignmentList' id={assignment.id} key={i}><span onClick={showHWModal}>{'NAME: ' + assignment.name}</span> 
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