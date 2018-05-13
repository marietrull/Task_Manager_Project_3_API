class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require()


	# Connection to DB
	ActiveRecord::Base.establish_connection(

		:adapter => 'postgresql',
		:database => 'task_manager'

	)

	# Middleware


		# Cookie

	use Rack::Session::Cookie, 	:key => 'rack.session',
								:path => '/',
								:secret => 'CuriousTurtles'
							





	# Parse JSON from body of requests

	before do

		payload_body = request.body.read

		if(payload_body != "")
			@payload = JSON.parse(payload_body).symbolize_keys
		end	

	end	




	# Routes

	get '/' do

		{
			success: false,
			message: 'Please consult the API documentation.'
		}.to_json
	end


	get '*' do
		halt 400, {
			success: false,
			message: 404
		}.to_json

	end	




end	