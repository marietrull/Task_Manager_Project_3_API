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


	# Index route for outcomess belonging to current user

	get '/' do
		
		user = User.find_by :username => session[:username]

		user_outcomes = user.outcomes

		{   success: true, 
			message: "Found outcomes",
			user_assignments:user_outcomes
		}.to_json

	end


end	