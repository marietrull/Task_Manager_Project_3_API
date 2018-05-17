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

	componentWillReceiveProps(nextProps){

		if (nextProps.editedAssignment === ''){ 
			console.log(nextProps.editedAssignment, typeof nextProps.editedAssignment)
		} else {
			this.setState({
				name: nextProps.editedAssignment.name,
				link: nextProps.editedAssignment.link,
				notes: nextProps.editedAssignment.notes
			})
		}
	}

	updateName = e => {
		const name = e.currentTarget.value;
		this.setState({name: name})
	}

	updateLink = e => {
		const link = e.currentTarget.value;
		this.setState({link: link})
	}

	updateNotes = e => {
		const notes = e.currentTarget.value;
		this.setState({notes: notes})
	}

	handleSubmit = (editItem) => {

		this.props.editAssignment(this.state.name, this.state.link, this.state.notes)
		
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
							<input className='editInput' id="name" type='text' value={this.state.name} placeholder='Assignment Name' onChange={this.updateName}/><br/>
						</div>
						<div className='editItem'>
							<label htmlFor='link'>Link</label>
							<br/>				
							<input className='editInput' id="link" type='text' value={this.state.link} placeholder='Link to Powerpoint' onChange={this.updateLink}/><br/>
						</div>
						<div className='editItem'>
							<label htmlFor='notes'>Notes</label>	
							<br/>
							<textarea className='notesInput' id="notes" type='text' value={this.state.notes} placeholder='Notes' onChange={this.updateNotes}> </textarea><br/>
						</div>
					</div>
					<button className='editButtons' onClick={this.props.removeAssignment}> DELETE </button>
					<input className='editButtons' onClick={this.handleSubmit} type='submit'/>
				</div>
			</div>

		)
	}
}

export default EditOutcomeModal;