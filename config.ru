# Sinatra and Activerecord
require 'sinatra/base'

require 'sinatra/activerecord'

# Models

require './models/HomeworkModel'

require './models/UserModel'

# Controllers

require './controllers/ApplicationController'

require './controllers/HomeworkController'

require './controllers/UserController'


# Routes

map('/'){
	run ApplicationController
}



