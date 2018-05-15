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

		console.log(this.state, 'state in EditHomeworkModal')

		const cssClass = this.props.showEdit ? 'Modal-Open' : 'Modal-Closed'

		return (
			<div className={cssClass}>
				<input type='name' value={this.state.name} onChange={this.updateName}/><br/>
				<input id="link" type='text' value={this.state.link} onChange={this.updateLink}/><br/>
				<input id="notes" type='text' value={this.state.notes} onChange={this.updateNotes}/><br/>
				<button onClick={this.props.removeAssignment}>DELETE</button>
				<button onClick={this.handleSubmit}> Done </button>
			</div>

		)
	}
}

export default EditHomeworkModal;