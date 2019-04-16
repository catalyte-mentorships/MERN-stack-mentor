import React, { Component } from 'react';


//import Search from './Search';
import Details from './Details';

import '../scss/search.scss';

import { getFetch } from "../utils/promises";

class Content extends Component {

	constructor() {
		super();

		this.state = {
			card: '',
		};

		this.getCard = this.getCard.bind(this);
	}

	clickEvents(event) {
		event.persist();

		if (event.target && event.target.id === 'random') {
			this.getCard(`${window.location.href}api/routes/get-card/random`);
		}
	}

	getCard(url) {
		getFetch(url).then(card => {
			this.setState({
				card: card.card,
			});
		});
	}

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
