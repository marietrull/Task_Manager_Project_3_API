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
		console.log(addClass, 'this is CSS Class')

		return (

			<form className={addClass} onSubmit={this.handleSubmit}>

				ADD ASSIGNMENT
				<br/>
				<br/>

				<label htmlFor='item'/>
				<input id="name" type='text' placeholder='Assignment Name' onChange={this.updateName}/><br/>
				<input id="link" type='text' placeholder='Github Link' onChange={this.updateLink}/><br/>
				<input id="notes" type='text' placeholder='Notes' onChange={this.updateNotes}/><br/>
				<input type='submit'/>

			</form>

			)
	}
}

export default CreateHomeworkModal;