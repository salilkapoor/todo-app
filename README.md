# TO-DO App

This is a TO-DO app build with react, styled with sass.

## Features
## App Capabilities
1) Add a task
2) See the list - pending, completed tasks
3) Mark your pending tasks completed
4) removed the completed tasks

### State Management
App state is managed with useReducer hook, a custom hook is built using useReducer<br/> to manage state at single point
and provides dispatch actions for performing various updates to state.

### Styling
Resets and variables are created under styles folder.

## Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Lighthouse

Config for lighthouse can be found under lighthouse/config/config.js<br />
reports can be found under lighthouse/reports/----<br />
    1. initial.(all) -> these were the reports generated initially

## Scripts
### `yarn run lighthouse`
Runs the lighthouse script<br />
and opens the report in browser.

### Script Explanation

"lighthouse http://localhost:3000 --config-path=./lighthouse/config/config.js --output json --output html --output-path ./lighthouse/reports/initial --quiet --view --chrome-flags=--headless"

http://localhost:3000 - url on which we need to see the metrics.

#### input
Configuration
`--config-path=./lighthouse/config/config.js` -> Default config can be found here

#### output
--output json --output html --output-path ./lighthouse/reports/initial ->

`--output json --output html` -> generates report in json and html format<br />
`--output-path` -> generates report at the path specific

`--quiet` -> 
If you want the report to run silently you can use the following argument<br />

`--view` -> 
With the “view” argument, your report opens in a chrome window once after it has finished running<br />

`--chrome-flags=--headless` -> 
If you don’t want the Chrome browser pop-up to open we need to provide this argument<br />