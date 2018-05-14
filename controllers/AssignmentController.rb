class AssignmentController < ApplicationController

	# Routes




	# Index route for assignments belonging to current user

	get '/' do
		
		user = User.find_by :username => session[:username]

		user_assignments = user.assignments

		{   success: true, 
			message: "Found #{user_assignments.length} assignment(s) for #{user.username}.",
			user_assignments:user_assignments
		}.to_json

	end




	# Add new assignment route

	post '/' do

		user = User.find_by :username => session[:username]

		user.assignments.create name:@payload[:name], link:@payload[:link], notes:@payload[:notes], complete:false 

		{
			success: true,

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



end	