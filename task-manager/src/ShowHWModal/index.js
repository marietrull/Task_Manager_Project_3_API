import React from 'react';
import './style.css';


const hwModal = ({hwShowing, hwModalOpen, closeHWModal})=>{

	return(


		<div id="myModal" className={hwModalOpen ? 'modal' : 'modalNone'}>

  		
  			<div className="modal-content">
   		 		<span onClick={closeHWModal} className="close">&times;</span>

   		 		<div className='showHWText'>
    			
					<p id='nameText'>{hwShowing.name}</p>

					<a id='linkText' target="_blank" href={hwShowing.link}> GitHub Link </a>

					<p id='notesHeader'> Notes </p>

					<p id='notesText'>{hwShowing.notes}</p>

				</div>

  			</div>

		</div>

	)

}


export default hwModal;