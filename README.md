Welcome to the hub of The Wild Draft! 
Here will be all the non coded information for the project.

Notes for the Public:

Developer Notes:
Back End:
Endpoints:

/api/auth/register : User Registration Endpoint
    This endpoint will take in a users:
        Screen Name: Needs to be a string, not unique, 3 > 20 characters long
        Email: Needs to be a string, has to have an @something.com, 11 > 40 characters long, must be unique
        Password: Needs to be a string, has to be hashed, must have 1 Uppercase, 1 number, 1 special character, 8 > 20 characters long
    If the post succeeds:
        Status: 201
        Message: You're officially Drafted to the Wild Childs!
    If the post fails because of missing screen name, email, and password:
        Status: 400
        Message: You need a Screen Name, Email, and Password to be Drafted to the Wild Childs
    If the post fails because of an invalid screen name:
        Status: 400
        Message: Keep your Screen Name between 3 and 20 characters long please!
    If the post fails because of an invalid email:
        Status: 400
        Message: Awe, your Email is too long or invalid.
    If the post fails because an email is already taken:
        Status: 400
        Message: Huh, that email is already used, strange.
    If the post fails because of an invalid Password:
        Status: 400
        Message: Your password has to be between 8 - 20 characters long, and must have 1 Uppercase, 1 Number, and 1 Special Character
/api/auth/login    : User Login Endpoint
    This endpoint will take in a users:
        Email: Needs to be an existing email
        Password: Needs to match the desired users pre set password
    If the post succeeds:
        Status: 201
        Message: Welcome, Screen Name to The Wild Drafts
    If the post fails because of a missing email or password:
        Status: 400
        Message: You need an email or password to enter
    If the post fails because of an invalid email or password
        Status: 400
        Message: You need to have a valid email or password to be a drafted Wild Child
/api/creation      : Character Creation Endpoint
    This endpoint will only run if there is a valid token available.
    This page will run the character creation, front end state will hold the temporary values, if saved it will post to the database.
    If the get succeeds:
        Status: 200
        Message: Time to Draft some Wild Characters!
    If the get fails because of a invalid or expired token:
        Status: 400
        Message: You Shall Not Create! Until you log in.
        Functionality note: This should route the user back to the login page.
    If the post succeeds:
        Status: 200
        Message: What a wonderfully Wild Draft!
        Character: { object of the character }
    If the post fails because of an error:
        Status: 400
        Message: Uh oh, We couldn't save this character, Maybe it needs to be more wild, try again!
/api/saved         : Saved Characters Endpoint
    This endpoint will only run if there is a valid token available.
    This page will hold all the data of saved characters the user wanted. 
    If the page succeeds:
        Status: 200
        Message: Here are your Wildest Creations! Well Done!
    If the get fails because of an invalid and expired token:
        Status: 400
        Message: You Shall Not Create! Until you log in.
        Functionality noteL This should route the user back to the login page.
    If there are no saved characters:
        Status: 200
        Message: Go make some Wild Creations!
/api/logout        : Logout Endpoint
    This endpoint will sign the user out and remove the token from local storage
    If the get succeeds:
        Status: 200
        Message: Farewell for now, until our next Wild Drafts
    If the get fails:
        Status: 400
        Message: Well, it looks like you can't leave, uh oh.

