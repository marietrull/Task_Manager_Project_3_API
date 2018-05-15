import React, {Component} from 'react';
import './style.css'

// Changed to a class --> because we can't actually type in our input
// This is because props are immutable
class EditHomeworkModal extends Component {
	// can pass props into your constructor
	constructor (){
		super();

		this.state = {
			name: '',
			link: '',
			notes: ''
		}
	}

	componentWillReceiveProps(nextProps){

		console.log(nextProps.editedAssignment, 'this is editedAssignment in compenent will Receive Props')

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

		console.log('handle submit clicked')

		this.props.editAssignment(this.state.name, this.state.link, this.state.notes)
		
	}


	render () {

		const cssClass = this.props.showEdit ? 'Modal-Open' : 'Modal-Closed'

		return (
			<div className={cssClass}>
				<label htmlFor="name">Name: </label>
				<input id="name" type='text' value={this.state.name} placeholder='Assignment Name' onChange={this.updateName}/><br/>
				<label htmlFor='link'>Link: </label>				
				<input id="link" type='text' value={this.state.link} placeholder='Github Link' onChange={this.updateLink}/><br/>
				<label htmlFor='notes'>Notes: </label>	
				<textArea id="notes" type='text' value={this.state.notes} placeholder='Notes' onChange={this.updateNotes}> </textArea><br/>
				<input type='submit'/>
			</div>

		)
	}
}

export default EditHomeworkModal;