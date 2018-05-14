import React, {Component} from 'react';
import './style.css'

// Changed to a class --> because we can't actually type in our input
// This is because props are immutable
class Modal extends Component {
	// can pass props into your constructor
	constructor (){
		super();

		this.state = {
			inputVal: ''
		}
	}

	handleInput = (e) => {

		this.setState({inputVal: e.currentTarget.value})

	}

	componentWillReceiveProps(nextProps){

		this.setState({inputVal: nextProps.editedMovie})
	}

	render () {
	const cssClass = this.props.showEdit ? 'Modal-Open' : 'Modal-Closed'

	return (
	<div className={cssClass}>
		<input type='text' placeholder='Assignment Name' value={this.state.inputVal} onChange={this.handleInput}/>
		<button onClick={this.props.closeEdit}> Done </button>
	</div>

		)
	}
}

export default Modal;