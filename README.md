# heart-rate
A dashboard for company leaders to monitor admission progress and view graphical breakdowns of prospective and enrolled members.

Project Name: HEART RATE

Project Type: Full Stack

Target Customer: Company Leaders and Managers

Goal: View admission progress, compare recruitment methods, compare years

Description: A dashboard for company leaders to monitor admission progress and view graphical breakdown of incoming cohorts.

Features:
1. User can view total number enrolled by month
2. User can view program selection distribution
3. User can view enrollment by university / age / gender
4. User can view total number of applicants
5. User can view % confirmed from % accepted
6. User can view % recruited by method (email / website / ad / flyer/ etc)
7. User can view % recruited by sales team
8. User can enroll a new member(*2*)
9. User can toggle 3 main views (Enrolled, Accepted, Applied)
10. User can compare recruitment by year

** Continuous Integration with Travis
** Deploy w/ Heroku

Research:
1. High Charts
*2* Typeform or google sheet integration with mongodb
  - Application submission results in automatic database update.


Issue 1:
Set up dev environment:
  install developer dependencies (webpack, webpack-dev-server, babel, babel-loader)
  install dependencies (react, react-dom, redux, react-redux, express, mongodb)
  create directory structure and files
  Add and setup webpack.config.js
  Add necessary scripts to package.json
