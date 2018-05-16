import React from 'react';
import './style.css';


const ShowHWModal = ({hwShowing, hwModalOpen, closeHWModal, check, checked})=>{

	if (hwShowing.complete == undefined){
		hwShowing.complete = false;
	}

	console.log(hwShowing.complete, "Show Hw ");
	return(


		<div id="myModal" className={hwModalOpen ? 'modal' : 'modalNone'}>

  		
  			<div className="modal-content">
   		 		<span onClick={closeHWModal} className="close">&times;</span>

   		 		<div className='showHWText'>
    			
					<p id='nameText'>{hwShowing.name}</p>

					<a id='linkText' target="_blank" href={hwShowing.link}> GitHub Link </a>

					<p id='notesHeader'> Notes </p>

					<p id='notesText'>{hwShowing.notes}</p>

					<p>{hwShowing.assignment_complete}</p>

					<div id='checkComplete'>
						<p id='checkLabel'>Complete</p>
						<form>
							<input onClick={check} checked={hwShowing.complete} type="checkbox" id="Complete" name="Complete" value="Complete"/>
							<label htmlFor="Complete"></label>
						</form>	

					</div>
		

				</div>

  			</div>

		</div>

	)

}


export default ShowHWModal;