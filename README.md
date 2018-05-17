# Task_Manager_Project_3
Task Manager for GA Homework Assignments

## REACT APP

See corresponding REACT app info at https://github.com/marietrull/Task_Manager_Project_3/blob/master/README.md

## Route Info



### UserController

- Post ‘/register’
    - Takes in a new username and password
    - Checks to make sure that username and password don’t already exist
    - If they don’t already exist, a new user will be created, a session will be created, and the user will be ‘logged in’
- Post ‘/login’
    - Takes in a username and password
    - Checks against users database
    - If the information is correct, a session will be created and the user will be ‘logged in’
- Post ‘/logout’
    - Destroys the session, effectively ‘logging the user out’

### AssignmentController + OutcomesController

- Get ‘/‘
    - Finds all of the assignments in the homework or outcomes table associated with the session’s user
- Post ‘/‘
    - Finds the user associated with the session
    - Creates a new assignment based on user input and adds to either the homework or outcomes table
- Get ‘/:id’
    - Finds an assignment based on its id
- Delete ‘/:id’
    - Finds an assignment based on its id
    - Deletes assignment from homework or outcomes table
- Put ‘/:id’
    - Finds an assignment based on its id
    - Edits assignment based on user input
    - Saves edited assignment to either the homework or outcomes table
- Put ‘/:id’
    - Finds an assignment based on its id
    - Edits assignment based on whether the user has checked the assignment as complete 
    - Saves edited assignment to either the homework or outcomes table
