import React, {Component} from 'react';
import './style.css'

class CreateHomeworkModal extends Component {

	constructor (){
		super();
		this.state = {
			name: '',
			link: '',
			notes: '',
			complete: false
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

	handleSubmit = e => {
		e.preventDefault();

		this.props.addAssignment(this.state.name, this.state.link, this.state.notes);
		this.setState({
			name: '',
			link: '',
			notes: ''
		})

	}

	render () {

		const addClass = this.props.showAdd ? 'Add-Modal-Open' : 'Add-Modal-Closed'

		return (

			<form className={addClass} onSubmit={this.handleSubmit}>

				ADD ASSIGNMENT
				<br/>
				<br/>

				<input id="name" type='text' value={this.state.name} placeholder='Assignment Name' onChange={this.updateName}/><br/>			
				<input id="link" type='text' value={this.state.link} placeholder='Github Link' onChange={this.updateLink}/><br/>
				<input id="notes" type='text' value={this.state.notes} placeholder='Notes' onChange={this.updateNotes}/><br/>
				<input type='submit'/>

			</form>

			)
	}
}

export default CreateHomeworkModal;