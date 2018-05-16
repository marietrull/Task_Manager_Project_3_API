class OutcomeController < ApplicationController

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


	# Index route for outcomes belonging to current user

	get '/' do
		
		user = User.find_by :username => session[:username]

		user_outcomes = user.outcomes.order(:id)

		{   success: true, 
			message: "Found outcomes",
			user_assignments:user_outcomes
		}.to_json

	end






	# Add new outcome assignment route

	post '/' do

		user = User.find_by :username => session[:username]

		newAssignment = user.outcomes.create name:@payload[:name], link:@payload[:link], notes:@payload[:notes], complete:false 

		{
			success: true,
			added_assignment: newAssignment,
			message: "Added outcome assignment for #{user.username}."
		}.to_json
	end	




	# Show route for outcome assignment

	get '/:id' do 

		assignment = Outcome.find params[:id]

		{ 
		 	success: true,

			assignment: assignment,

			message: "Found #{assignment.name}"
		}.to_json

	end	



	# Delete assignment route

	delete '/:id' do

		assignment = Outcome.find params[:id]

		assignment.destroy

		{
			success: true,

			message: "Delete #{assignment.name} successful."
		}.to_json

	end	



	# Edit route for assignment

	put '/:id' do

		assignment = Outcome.find params[:id]

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

		assignment = Outcome.find params[:id]

		assignment.complete == true ? assignment.complete = false : assignment.complete = true

		assignment.save

		{
			success: true,
			assignment_complete: assignment.complete,
			message:"Assignment status updated."
		}.to_json
	end	


end	