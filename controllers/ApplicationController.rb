class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require()



	# Routes

	get '/' do 

		{
			success: true,
		}.to_json
		
	end




end	