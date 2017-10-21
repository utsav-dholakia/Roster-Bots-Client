This is a client side application for creating roster of bots with generic attributes.

The user can give team name which will be prefixed to digits and bots will be generated with those names. There are 3 attributes to each bot : Speed, Strength and Agility.

The total team can be up to 175 points in total which is the cap on the allowance. Also, the team created will have 10 bots in the starter lineup and 5 bots in the substitute lineup.

Below is the demo video showing the whole operation.
![Demo Video](https://media.giphy.com/media/3o6nUYhFerjPcEumCA/giphy.gif)

Below images show loader when the client is waiting for server to respond.
![Loader](https://user-images.githubusercontent.com/19412912/31845512-0cec5b90-b5c7-11e7-88fa-17443e17510e.png)

Below image shows case when there is an error while generating bots.
![Error](https://user-images.githubusercontent.com/19412912/31845513-0cfc7fc0-b5c7-11e7-8049-457e2e8f71d5.png)

### __ASSUMPTIONS__
* The user will not be able to enter anything other than letters in the team name field (only up to 10 letters)
* Bots created will be shown in the sorted in descending order of their total score, and put into starter and substitue lineup accordingly

### __STEPS TO RUN__
* Install Node.js and npm(preferrably node version : 8.6.0 and npm version : 3.10.10).
* Clone this repository.
* Run __npm update__ command at the root of the project. This will download and update all the dependacies needed to run/test this server.
* If there is an issue in in this step from create-react-app framework, remove '-' and make all letters small case in the project name and try again.
* Start server created using [Roster-Bots-Server](https://github.com/utsav-dholakia/Roster-Bots-Server) project first.
* To run the application, use __npm start__ command at the root of project directory, and open 'localhost:3000' on browser.
* To test the application, use __npm test__ command at the root of project directory. This basic test will verify if the application DOM is rendered correctly or not.

## __Note__
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* The create-react-app provides inbuilt server for hosting the client app.
* This project is built using Webstorm IDE from JetBrains.
