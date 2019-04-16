import React, { Component } from 'react';


//import Search from './Search';
import Details from './Details/Details';

import '../scss/search.scss';

import { getFetch } from "../utils/promises";

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * class Content
 * @extends React.Component
 *
 */
class Content extends Component {

	constructor() {
		super();

		this.state = {
			card: '',
		};

		this.getCard = this.getCard.bind(this);
	}

	/**
	 * @author Keith Murphy | nomadmystics@gmail.com
	 * @param {Object} event
	 * @return void
	 */
	clickEvents(event) {
		event.persist();

		if (event.target && event.target.id === 'random') {
			this.getCard(`${window.location.href}api/routes/get-card/random`);
		}
	}

	/**
	 * @author Keith Murphy | nomadmystics@gmail.com
	 * @param {string} url
	 *
	 */
	getCard(url) {
		getFetch(url).then(card => {
			this.setState({
				card: card.card,
			});
		});
	}

	/**
	 * @author Keith Murphy | nomadmystics@gmail.com
	 * @returns {*}
	 */
	render() {
		return (
			<div className="app__main-grid">
				<div className="search">
					<h2>Search</h2>
					<div className="search__button" id="random" onClick={(e) => this.clickEvents(e)}>
						Random Card?
					</div>
				</div>
				<Details card={this.state.card}/>
			</div>
		)
	}
}

export default Content;
