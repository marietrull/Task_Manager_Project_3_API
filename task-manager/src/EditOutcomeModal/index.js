import React,{Component} from 'react';

class EditOutcomeModal extends Component {
	constructor(){
		super();

		this.state = {
			name: '',
			link: '',
			notes: ''
		}
	}

	render () {

		const cssClass = this.props.showEdit ? 'modal' : 'modalNone'

		return (
			<div className={cssClass}>
				<div className="modal-content">
					<span className="close" onClick={this.props.closeEditModal}>&times;</span>
					<div id='newHead'> EDIT ASSIGNMENT </div>				
					<div id='editContent'>
						<div className='editItem'>
							<label htmlFor="name">Name</label>
							<br/>
							<input className='editInput' id="name" type='text' value={this.state.name} placeholder='Assignment Name'/><br/>
						</div>
						<div className='editItem'>
							<label htmlFor='link'>Link</label>
							<br/>				
							<input className='editInput' id="link" type='text' value={this.state.link} placeholder='Link to Powerpoint'/><br/>
						</div>
						<div className='editItem'>
							<label htmlFor='notes'>Notes</label>	
							<br/>
							<textarea className='notesInput' id="notes" type='text' value={this.state.notes} placeholder='Notes'> </textarea><br/>
						</div>
					</div>
					<button className='editButtons' onClick={this.props.removeAssignment}> DELETE </button>
					<input className='editButtons' type='submit'/>
				</div>
			</div>

		)
	}
}

export default EditOutcomeModal;