class AssignmentController < ApplicationController

	# Filter to prevent users from accessing routes without being logged

	before do

  		if !session[:logged_in]
  			halt 200, {
  				success:false,
  				message:"Access Denied: Please Login.",
  			}.to_json
  		end
  	end	




	# Routes


	# Index route for assignments belonging to current user

	get '/' do
		
		user = User.find_by :username => session[:username]

		user_assignments = user.assignments.order(:id)
		
		{   success: true, 
			message: "Found #{user_assignments.length} assignment(s) for #{user.username}.",
			user_assignments:user_assignments
		}.to_json

	end




	# Add new assignment route

	post '/' do

		user = User.find_by :username => session[:username]

		newAssignment = user.assignments.create name:@payload[:name], link:@payload[:link], notes:@payload[:notes], complete:false 

		{
			success: true,
			added_assignment: newAssignment,
			message: "Added assignment for #{user.username}."
		}.to_json
	end	




	# Show route for assignment

	get '/:id' do 

		assignment = Assignment.find params[:id]

		{ 
		 	success: true,

			assignment: assignment,

			message: "Found #{assignment.name}"
		}.to_json

	end	



	# Delete assignment route

	delete '/:id' do

		assignment = Assignment.find params[:id]

		assignment.destroy

		{
			success: true,

			message: "Delete #{assignment.name} successful."
		}.to_json

	end	



	# Edit route for assignment

	put '/:id' do

		assignment = Assignment.find params[:id]

		assignment.name = @payload[:name]

		assignment.link = @payload[:link]

		assignment.notes = @payload[:notes]

		assignment.save

		{
			success: true,

			updated_assignment: assignment,

			message: "Updated assignment."
		}.to_json
	end	




	# Edit route for "Complete" status of assignment

	put '/:id/check' do 

		assignment = Assignment.find params[:id]

		assignment.complete == true ? assignment.complete = false : assignment.complete = true

		assignment.save

		{
			success: true,
			assignment_complete: assignment.complete,
			message:"Assignment status updated."
		}.to_json
	end	







end	