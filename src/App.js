import React, { Component } from 'react';

import MenuManager from './MenuManager.js';
import TabManager from './TabManager.js';

class App extends Component {
	constructor() {
		super()

		this.state = {
			menu: [],
			tabs: []
		}
	}
	render() {
		return (
			<div className="App">
				<section>
					<MenuManager data={this.state.menu} />
				</section>
				<section>
					<TabManager data={this.state.tabs} />
				</section>
			</div>
		);
	}
}

export default App;
