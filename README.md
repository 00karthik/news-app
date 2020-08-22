# News Aggregator

> A news aggregator with weather info

## Table of Contents


- [Installation](#installation)
- [UI Features](#ui-features)
- [Technical Features](#technical-features)
- [Deployment](#deployment)

## Live demo
- <a href="https://gracious-raman-81221e.netlify.app">https://gracious-raman-81221e.netlify.app</a>

## Installation



- Clone this repo to your local machine using `https://github.com/00karthik/news-app`

```shell
$ npm install
$ npm start
```
- App will start on `http://localhost:3000`

---

## UI Features

- Used <a href="https://ant.design/docs/react/introduce" target="_blank">Ant Design</a> as the UI Framework.
- Responsive design.
- The weather widget displays `Temprature`, `Location` and corresponding `Icons` for the current weather.
- Sidebar is collapsed in mobile view by default.
- Clicking on sidebar links automatically closes sidebar improving the UX of user navigation.
- `Loaders` for API calls.
- Automatically fetches browser language.
- Fetches the Geo location to get weather data.
- Automatically finds the country using <a href="https://wtfismyip.com/json">wtfismyip.com</a> and gets the news based on the country.
- 404 route for error URLs

---

## Technical features

- Used state management using `Context API` to share language and sidebar collapse states to the main component from Header and Sidebar respectively.
- Used <a href="http://lesscss.org/">Less</a> for styling.
- Used `Geolocation API` to get latitude and longitude.
- Custom `Hooks` to call the APIs and track loading, success and error states and also to demonstrate its use.
- Made all the logical components to individual React components.
- Added `react-router` to routing. News search is done  by passing search query as params to URL. This is done to implement the working of react router.
- Used <a href="https://github.com/axios/axios">Axios</a> instead of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch</a> as Fetch is not supported by older browsers.
- Added <a href="https://eslint.org/">eslint</a> to ensure the quality of the code.
- Added Git pre commit hooks to linting the code.
---
## Deployment

```shell
$ npm run build
```
- Copy the build folder contents to a http web server.