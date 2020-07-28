# PinPad 

## Introduction 👋🏻
The aim of this project is build a PINPAD application where you need to unlock with the right PINCODE.
You have 3 attems before Pinpad locks for 30 seconds and change the password.
In order to guess the right Pincode there's a button where you can see the current code.

### How to run the project
In order to run this project, unzip it, enter into the unzipped container folder, open your terminal and go inside the unzipped folder. Install the depdendencies running `npm i` or `yarn install` then you can use the followings scripts. 
> Note: All scripts can be run using npm

## Available Scripts 👨🏻‍💻

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Launches the test coverage runner

### `yarn test:e2e`

Launches a local server and open a cypress windows where you can run all e2e tests.

### `yarn storybook`

Launches the storybook viewer in order to view the components in a split way.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## TODO 📝
- Add timer 
- Add top 5 score
- Top 5 Store score into a firestore or other DB
- Fix Cypress implementation

## How I did it? 🤔

In this programming exercise I followed the following steps

### 1) Layout design

Use figma in order to create base layout
https://www.figma.com/file/nEK87apwWqgQcY4k3LvStm/Pin-Code?node-id=0%3A1

Test the base layout in codepen
https://codepen.io/ivanlhz/pen/GRJbmqy

### 2) Create the project with create_react_app and remove the base CRA project components.

### 3) Create tests and components

- 1. Create the PinPad test and the component
- 2. Add the PinPad to de App
- 3. Create the PinInput test and the component
- 4. Add the PinInput to de App
- 5. Add App behavior and final css

### 4) Components tests, fixes and revision

This is the final revision of the code, where I do small fixes, some improvements, refactors and do uncoverage tests.

### 5) Add Cypress(e2e testing)

### 6) Add Stroybook
Add a visual documentation about components and it states
