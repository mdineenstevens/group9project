# group9project QuizMe
## How to initialize and run the project
* step1:Please confirm that you have enabled mongoDB correctly, server url is default: "mongodb://localhost:27017/"
* step2:In the project directory, run npm script ‘npm seed’ to initialize the database.
it will generates some basic data to ensure that you can experience the QuizMe project normally.
The basic data include 4 candidates 5 creators and 100 questions, you can see the detail in ./tasks/seed.js
* step3:In the project directory, run npm script ‘npm start’ to start QuizMe project.
* step4:The project will run on the http://localhost:3000/QuizMe 

## Responsibility for Project
### Wang Hangyu:
* Originally Task:Do all data part for the application.
* Performed：Do all data part, Integration route and views(redesign and rebuild the router's url, fix some issues in html and handlebar), implement some missing features ， Organize and coordinate the work of others.

### Dineen Michael:
* Originally Task:Do all html and css for the application.
* Performed：Do all html and css, Convert some html page to handlebar, Tota11y.

### Nagel Liam
* Originally Task:Convert html page to handlebar for the application.
* Performed：Convert some html page to handlebar,Html validation.

### Tian Chenyu
* Originally Task:Do all route part for the application.
* Performed：Do all route part, Do the middleware part.

## Additional Instructions：
1. For the access license management：
* If you are not logged in, you can only access the main homepage, and access to any other url will be redirected to the main homepage.
* If you log in as a creator, you can only access the creator function, for any candidate function and main homepage you will be redirected to the creator homepage.
* If you log in as a candidate, you can only access the candidate function, for any creator function and main homepage you will be redirected to the candidate homepage.
* For the function of modify question, if you are not this question's creator, you will be redirected to the creator homepage.
