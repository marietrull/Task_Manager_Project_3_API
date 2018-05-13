class UserController < ApplicationController



	# Routes

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



end	