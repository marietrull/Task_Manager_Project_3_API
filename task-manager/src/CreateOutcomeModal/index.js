import React, {Component} from 'react';

class CreateOutcomeModal extends Component {
	constructor (){
		super();
		this.state={
			name: '',
			link: 'http://',
			notes: '',
			complete: false
		}
	}

	render (){

		const addClass = this.props.showAdd ? 'modal' : 'modalNone'

		return (

			<form className={addClass}>
				<div className="modal-content">

					<span className="close" onClick={this.props.closeAddModal}>&times;</span>

					<div id='newHead'> NEW ASSIGNMENT </div>
					
					<div id='newText'>	
						<div className='newItem'>	
							<label htmlFor="name">Name</label>
							<br/>
							<input className='newInput' type='text' value={this.state.name} placeholder='Assignment Name'/>
						</div>
						<div className='newItem'>
							<label htmlFor='link'>Link</label>	
							<br/>			
							<input className='newInput'type='text' value={this.state.link} placeholder='Link to Powerpoint'/>
						</div>
						<div className='newItem'>
							<label htmlFor='notes'>Notes</label>
							<br/>
							<textarea className='notesInput' type='text' value={this.state.notes} placeholder='Notes'></textarea>
						</div>
						<input id='newSubmit' type='submit'/>
					</div>

				</div>

			</form>
		)

	}
}



export default CreateOutcomeModal;
