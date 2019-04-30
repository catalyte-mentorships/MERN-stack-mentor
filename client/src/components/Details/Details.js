import React, { Component } from 'react';
import _ from 'lodash'
import Button from "react-bootstrap/Button";

// my modules
import SingleCardDetails from './SingleCardDetails';
import MultiCardDetails from './MultiCardDetails';

import '../../scss/details.scss';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * class Details
 * @extends React.Component
 */
class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			isSet: false,
			isUpdated: false,
			initCards: [],
		};

		this.clickEvents = this.clickEvents.bind(this);
	}

	componentWillReceiveProps(props) {
		if (!props.isSet) {
			// the individual card details
			const { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, } = props.card;
			this.setState({
				cards: { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, },
				isSet: false,
				initCards: { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, },
			});
		} else if (props.isSet) {
			// a set of cards
			this.setState({
				cards: props.card.cards,
				isSet: true,
				initCards: props.card.cards,
			});
		}
	}

	clickEvents(event) {
		event.persist();


		if (event.target && 'BUTTON' === event.target.tagName) {
			let filteredCards = this.state.initCards.filter((card) => {
				if (!_.isEmpty(card.colors) && card.colors.length === 1) {
					if (card.colorIdentity.length === 1) {
						for (let color = 0; color < card.colors.length; color++) {
							if (card.colors[color] === event.target.innerText) {
								return card;
							}
						}
					}
				} else if (!_.isEmpty(card.colors) && card.colors.length > 1 && card.colorIdentity.length > 0 && event.target.innerText === 'Multicolor') {
					return card;
				} else if (card.colors.length === 0 && card.types.includes('Land') && event.target.innerText === 'Land') {
					return card;
				} else if (card.colors.length === 0 && card.colorIdentity.length === 0 && event.target.innerText === 'Colorless') {
					return card;
				}
			});

			this.setState({
				cards: filteredCards,
				isUpdated: true,
			});
		}
	}

	render() {
		return (
			<div className="Details">
				<div className="filter">
					<ul>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">Blue</Button></li>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">White</Button></li>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">Green</Button></li>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">Black</Button></li>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">Red</Button></li>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">Multicolor</Button></li>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">Land</Button></li>
						<li onClick={(e) => this.clickEvents(e)}><Button variant="secondary">Colorless</Button></li>
					</ul>
				</div>
				{/*<div className="spinner"></div>*/}
				{!this.props.isSet && !_.isEmpty(this.state.cards) ? <SingleCardDetails card={this.state.cards} /> : ''}
				{this.props.isSet && !_.isEmpty(this.state.cards) ? <MultiCardDetails cards={this.state.cards}/> : ''}
			</div>
		);
	}
}

export default Details;
