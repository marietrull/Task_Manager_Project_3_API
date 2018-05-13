class UserController < ApplicationController



	# Routes


	# Register Route

	post '/register' do 

		user = User.new

		user.username = @payload[:username]

		user.password = @payload[:password]

		user.save

		session[:logged_in] = true

		session[:username] = user.username


		{
			success: true,

			username:session[:username],

			message: "Logged in as #{session[:username]}."

		}.to_json
		
	end




	# Login Route

	post '/login' do

		username = @payload[:username]

		password = @payload[:password]

		user = User.find_by :username => username



		if user && user.authenticate(password)

			session[:logged_in] = true

			session[:username] = username

			{
				success: true,

				username: session[:username],

				message: "Logged in as #{session[:username]}."

			}.to_json

		else 

			{
				success: false,

				message: "Invalid username or password."
			}.to_json

		end	

	end




	# Logout

	post '/logout' do

		session.destroy

		{
			success: true,

			message:"Logged out."
		}.to_json


	end


end	