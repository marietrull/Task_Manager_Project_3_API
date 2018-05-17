import React from 'react';

const Outcome = ({outcomes, openEdit,showOutcomesModal }) => {

	const outcomesList = outcomes.map((outcome,i) => {

		return <li className='assignmentList' id={outcome.id} key={i}>
					<span onClick={showOutcomesModal}>{outcome.name}</span>
					
					<button className='editButton' onClick={openEdit}>EDIT</button>

				</li>	
	})

	return(

			

		<div id='homeworkShow'>
			{outcomesList}
		</div>

	)
}

export default Outcome; 