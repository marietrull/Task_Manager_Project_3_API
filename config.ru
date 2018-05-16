# Sinatra and Activerecord
require 'sinatra/base'

require 'sinatra/activerecord'

# Models

require './models/AssignmentModel'

require './models/UserModel'

require './models/OutcomeModel'

# Controllers

require './controllers/ApplicationController'

require './controllers/AssignmentController'

require './controllers/UserController'

require './controllers/OutcomeController'





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

map('/outcome'){
	run OutcomeController
}


