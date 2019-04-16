import React, { Component } from 'react';

// My components
import Header from './components/Header';



// Styles
import './scss/common.scss';
import './scss/app.scss';

import Content from "./components/Content";

class App extends Component {
  render() {
    return (
		<div className="App">
			<Header className="App-header"/>
			<Content/>
		</div>
    );
  }
}

export default App;
