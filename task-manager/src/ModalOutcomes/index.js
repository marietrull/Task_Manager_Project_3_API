import React from 'react';
import './style.css';


const ModalOutcomes = ({outcomeModalOpen, outcomeShowing, closeOutcomeModal, check})=>{

	if (outcomeShowing.complete == undefined){
		outcomeShowing.complete = false;
	}

	

	
	return(


		<div id="myModal" className={outcomeModalOpen ? 'modal' : 'modalNone'}>

  		
  			<div className="modal-content">
   		 		<span onClick={closeOutcomeModal} className="close">&times;</span>

   		 		<div className='showHWText'>
    			
					<p id='nameText'>{outcomeShowing.name}</p>

					<a id='linkText' target="_blank" href={outcomeShowing.link}> GitHub Link </a>

					<p id='notesHeader'> Notes </p>

					<p id='notesText'>{outcomeShowing.notes}</p>


					<div id='checkComplete'>
						<p id='checkLabel'>Complete</p>
						<form >
							<input  checked={outcomeShowing.complete} type="checkbox" id="Complete" name="Complete" value="Complete"/>
							<label onClick={check} htmlFor="Complete"></label>
						</form>	

					</div>
		

				</div>

  			</div>

		</div>

	)

}


export default ModalOutcomes;