import React from 'react';
import './style.css';


const hwModal = ({hwShowing, hwModalOpen, closeModal})=>{

	return(


		<div id="myModal" className={hwModalOpen ? 'modal' : 'modalNone'}>

  		
  			<div className="modal-content">
   		 		<span onClick={closeModal} className="close">&times;</span>
    			
				<p>{hwShowing.name}</p>

				<p>{hwShowing.link}</p>

				<p>{hwShowing.notes}</p>
  			</div>

		</div>

	)

}


export default hwModal;