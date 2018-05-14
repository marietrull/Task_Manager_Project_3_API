import React, {Component} from 'react';
import './style.css'

class CreateHomework extends Component {

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

	handleSubmit = e => {
		e.preventDefault();
		this.props.addAssignment(this.state.name);
		this.setState({
			name: ''
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
				<input id="name" type='text' placeholder='Assignment Name' onChange={this.updateName}/>
				<input type='submit'/>

			</form>

			)
	}
}

export default CreateHomework;