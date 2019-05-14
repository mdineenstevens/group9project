# group9project QuizMe

## What environment we tried
* npm version: 6.5.0
* node version: 11.7.0, 12.0.0
* browser: chrome, safari

## How to initialize and run the project
* **step1**:Please confirm that you have enabled mongoDB correctly, server url is default: "mongodb://localhost:27017/"

* **step2**:In the project directory, run npm script ‘npm run seed’ to initialize the database.Seeding takes you some time since the hashing password. When seeding, your terminal will show the process:

* //////////////////The candidates is finished//////////////////

* //////////////////The creators is finished//////////////////

* creator1 is finished.

* creator2 is finished.

* creator3 is finished.

* creator4 is finished.

* creator5 is finished.

* SEEDING DONE.

* You do not need to terminate it since it will stop automatically. If you accidentally terminate it, and want to seed the task again. Please delete the DB named CS546_Group9 and then seed.

* The basic data include 4 candidates 5 creators and 100 questions, you can see the accout shown below:

* **candidate info1**: username: Hangyu Wang, password: HWang2019;

* **candidate info2**: username: Michael Dineen, password: MDineen2019;

* **candidate info3**: username: Chenyu Tian, password: CTian2019;

* **candidate info4**: username: Liam Nagel, password: LNagel2019;

* **creator info1**: username: Turing, password: No1ModernCS;

* **creator info2**: username: Gagarin, password: No1Astronaut;

* **creator info3**: username: Mozart, password: No1Musician;

* **creator info4**: username: Darwin, password: No1Biologist;

* **creator info5**: username: Van Gogh, password: No1Painter;

* more details in ./tasks/seed.js 

* **step3**:In the project directory, run npm script ‘npm start’ to start QuizMe project.

* **step4**:The project will run on the http://localhost:3000/QuizMe 

## Contribution for Project
### Wang Hangyu:
* Originally Task: Do all data part for the application.
* Performed：Finish all data part including seeding task; integration routes and views(redesign and rebuild the router's url, fix some issues in html and handlebar, convert some htmls to handlebars), implement some missing features; finish front script.js(s).

### Dineen Michael:
* Originally Task: Do all front htmls and all realting css for the application.
* Performed：Finish all original htmls and relating css; add accessibility, Tota11y.

### Tian Chenyu
* Originally Task: Do all routes part for the application.
* Performed：Finish all route part; finish the middleware part; add security, xss; help for integration.

### Nagel Liam
* Originally Task:Convert html pages to handlebar for the application.
* Performed：Convert some htmls to handlebars, htmls validation.



## Additional Instructions：
1. For the access license management：
* If you are not logged in, you can only access the main homepage, and access to any other url will be redirected to the main homepage.
* If you log in as a creator, you can only access the creator function, for any candidate function and main homepage you will be redirected to the creator homepage.
* If you log in as a candidate, you can only access the candidate function, for any creator function and main homepage you will be redirected to the candidate homepage.
* For the function of modify question, if you are not this question's creator, you will be redirected to the creator homepage.

2. For search question in creator part：
* If you don't provide any keyword, then the default is to show all questions. And you can modify and delete question in the page.

2. For starting a quiz in all user part：
* If you don't provide any keyword, then the default is to random give you 5 question in the DB.










