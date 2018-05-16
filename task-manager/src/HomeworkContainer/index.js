import React, { Component } from 'react';
import Homework from '../Homework';
import CreateHomeworkModal from '../CreateHomeworkModal';
import EditHomeworkModal from '../EditHomeworkModal';
import ShowHWModal from '../ShowHWModal';
import OutcomesContainer from '../OutcomesContainer';
import './style.css'


class HomeworkContainer extends Component {
	constructor (){
		super();

		this.state = {
			assignments: [],
			showAdd: false,
			showEdit: false,
			editedAssignment: '',
			hwModalOpen: false,
			hwShowing:{},
			outcomes: false

			

		}
	}

	componentDidMount(){
	    this.getItems()
	    .then((response) => {
	      this.setState({assignments: response.user_assignments})
	    })
	    .catch ((err) => {
	      console.log(err)
	    })

	}

	getItems = async () => {
	    const assignmentsJson = await fetch('http://localhost:9292/assignment', {
	      credentials: 'include'
	    })
	    const assignments = await assignmentsJson.json();
	    return assignments;
  	}

  	openAdd = async (e) => {

  		this.setState({
			showAdd: true
		})
  		
  	}

	addAssignment = async (name, link, notes) => {

		const assignments = await fetch('http://localhost:9292/assignment', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				link: link,
				notes: notes
			}),
			credentials: 'include'
		})

		const assignmentsParsed = await assignments.json();

		this.setState({assignments: [...this.state.assignments, assignmentsParsed.added_assignment]})

		this.setState({
			showAdd: false
		})

	}

	closeAddModal = () => {
		this.setState({
			showAdd: false
		});
	}

	removeAssignment = async () => {
		//Capture the id of the assignment for deletion
		const id = this.state.editedAssignment.id

		const removeItem = await fetch('http://localhost:9292/assignment/' + id, {
			method: 'DELETE',
			credentials: 'include'
		});

		const response = await removeItem.json();
		if (response.success){
			this.setState({assignments: this.state.assignments.filter((removeItem) => removeItem.id != id)});
		} 

		this.setState({
			showEdit: false
		})
		
	}

	openEdit = (e) => {

		const id = parseInt(e.currentTarget.parentNode.id);

	    const editedAssignment = this.state.assignments.find((assignment) => {
	      return assignment.id === id 
	    })

	    this.setState({
	      showEdit: true,
	      editedAssignment: editedAssignment
	    })
		
	}

	editAssignment = async (name, link, notes) => {
		const editId = this.state.editedAssignment.id

														// Added syntactic sugar
		const assignment = await fetch(`http://localhost:9292/assignment/${editId}`, {



			method: 'PUT',
			body: JSON.stringify({
				name: name,
				link: link,
				notes: notes
			}),
			credentials: 'include'
		})

		const response = await assignment.json();

		const editedAssignmentIndex = this.state.assignments.findIndex((assignment) => {

			return assignment.id === response.updated_assignment.id
			
		})		

		const state = this.state;
		state.assignments[editedAssignmentIndex] = response.updated_assignment;
		state.showEdit = false;
		this.setState(state)

	}

	closeEditModal = () => {
		this.setState({
			showEdit: false
		});
	}

	showHWModal = async (e)=>{

		const hwId = e.target.parentNode.id;

		const hwJSON = await fetch(`http://localhost:9292/assignment/${hwId}`, {
			credentials:'include'
		});


		const hwResponse = await hwJSON.json();


		this.setState({
			hwModalOpen: true,
			hwShowing: hwResponse.assignment
		});

	}


	closeHWModal = () => {
		this.setState({
			hwModalOpen: false
		});
	}


	changeTab=(e)=>{

		console.log('Tab Clicked')

		const tabText = e.target.innerText;

		tabText === "Outcomes" ? this.setState({outcomes: true}) : this.setState({outcomes: false});
	}

	check= async (e)=>{
		const checkJSON = await fetch(`http://localhost:9292/assignment/${this.state.hwShowing.id}/check`, {
			method: 'PUT',
			credentials: 'include'
		});

		const checkResp = await checkJSON.json();
		

		if(this.state.hwShowing.complete){
			this.setState({hwShowing:{...this.state.hwShowing, complete: false }});
		}
		else
		{
			this.setState({hwShowing:{...this.state.hwShowing, complete: true }});
		}	

	}


	render () {

		return (
			<div className="LogRegField">


				<div className="MainTab">
					<div className="LoginTab Tab" onClick={this.changeTab} >Outcomes</div> 

					<div className="RegisterTab Tab" onClick={this.changeTab}>Homework</div>
				</div>	


				{this.state.outcomes == false ? 

					<div id='homeworkContainer'>
						<Homework assignments={this.state.assignments} openEdit={this.openEdit}showHWModal={this.showHWModal}/>
						<button id='addButton'  onClick={this.openAdd}> New Assignment </button>
						<CreateHomeworkModal addAssignment={this.addAssignment} openEdit={this.openEdit} showAdd={this.state.showAdd} closeAddModal={this.closeAddModal}/>

						<ShowHWModal hwShowing={this.state.hwShowing} hwModalOpen={this.state.hwModalOpen} closeHWModal={this.closeHWModal} check={this.check} />

						<EditHomeworkModal showEdit={this.state.showEdit} editAssignment={this.editAssignment} removeAssignment={this.removeAssignment} editedAssignment={this.state.editedAssignment} closeEditModal={this.closeEditModal}/>

					</div>

				:

					<OutcomesContainer/>
				}

				
			</div>
		)

	}
}


export default HomeworkContainer;