# Sinatra and Activerecord
require 'sinatra/base'

require 'sinatra/activerecord'

# Models

require './models/AssignmentModel'

require './models/UserModel'

# Controllers

require './controllers/ApplicationController'

require './controllers/AssignmentController'

require './controllers/UserController'





# Routes

map('/'){
	run ApplicationController
}

map('/user'){
	run UserController
}

map('/assignment'){
	run AssignmentController
}


