 class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require()


	# Connection to DB
	ActiveRecord::Base.establish_connection(

		:adapter => 'postgresql',
		:database => 'task_manager'

	)


	# Allows request to be made across different servers

	register Sinatra::CrossOrigin




	# Middleware


		# Cookie

	use Rack::Session::Cookie, 	:key => 'rack.session',
								:path => '/',
								:secret => 'CuriousTurtles'



		# Method Override to allow PUT, PATCH, DELETE
	use Rack::MethodOverride
	set :method_override, true							
							





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




	# Allows request to be made across different servers

	configure do
    	enable :cross_origin
  	end


  	set :allow_methods, [:get, :post,:delete, :put, :options]


  	options '*' do

    	p "opi"
    	response.headers['Allow'] = 'HEAD, GET, POST, PUT, PATCH, DELETE'
    	response.headers['Access-Control-Allow-Origin'] = '*'
    	response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    	
 	end




end	