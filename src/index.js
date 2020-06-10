import React from 'react';
import ReactDOM from 'react-dom';
import './SiteContentDirectories/Resources/CssFiles/index.css';
import App from './App';
import * as serviceWorker from './SiteContentDirectories/misc/serviceWorker';
import setSlideDimensions from './SiteContentDirectories/Utilities/SetSlideDimensions';
import whileScrolling from './SiteContentDirectories/Utilities/WhileScrolling';

window.onresize = setSlideDimensions;
window.onscroll = whileScrolling;

ReactDOM.render(
  <React.StrictMode>
	<button type="button" id="moveUpButton">Up</button>
	<App/>
	<button type="button" id="moveDownButton">Down</button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
