import React from 'react';

const Outcome = ({outcomes}) => {

	const outcomesList = outcomes.map((outcome,i) => {

		return <li className='assignmentList' id={outcome.id} key={i}>{outcome}
					<button className='editButton'>EDIT</button>

				</li>	
	})

	return(

			

		<div id='homeworkShow'>
			{outcomesList}
		</div>

	)
}

export default Outcome; 