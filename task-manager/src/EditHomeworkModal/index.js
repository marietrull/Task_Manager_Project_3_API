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
				<input type='name' placeholder='Assignment Name' onChange={this.updateName}/><br/>
				<input id="link" type='text' placeholder='Github Link' onChange={this.updateLink}/><br/>
				<input id="notes" type='text' placeholder='Notes' onChange={this.updateNotes}/><br/>
				<button onClick={this.handleSubmit}> Done </button>
			</div>

		)
	}
}

export default EditHomeworkModal;