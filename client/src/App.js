import React, { Component } from 'react';

// My components
import Header from './components/Header';

// https://dribbble.com/shots/17462236/attachments/12595582?mode=media
// Styles
import './scss/common.scss';
import './scss/app.scss';

import Content from './components/Content';

class App extends Component {
  render() {
    return (
		<div className="App">
			{/*<Header className="App-header"/>*/}
			<Content/>
		</div>
    );
  }
}

export default App;
