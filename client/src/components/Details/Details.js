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
		super();
		this.state = {
			cards: props.card,
			isSet: props.isSet,
		}
	}

	componentWillReceiveProps(props) {
		if (!props.isSet) {
			// the individual card details
			const { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, } = props.card;
			this.card = { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, };
		} else if (props.isSet) {
			// a set of cards
			this.cards = props.card;
		}
	}

	render() {
		return (
			<div className="Details">
				<div className="filter">
					<ul>
						<li><Button variant="secondary">Blue</Button></li>
						<li><Button variant="secondary">White</Button></li>
						<li><Button variant="secondary">Green</Button></li>
						<li><Button variant="secondary">Black</Button></li>
						<li><Button variant="secondary">Red</Button></li>
						<li><Button variant="secondary">Multicolor</Button></li>
						<li><Button variant="secondary">Land</Button></li>
						<li><Button variant="secondary">Colorless</Button></li>
					</ul>
				</div>
				{/*<div className="spinner"></div>*/}
				{!this.props.isSet && !_.isEmpty(this.props.card) ? <SingleCardDetails card={this.card} /> : ''}
				{this.props.isSet && !_.isEmpty(this.props.card) ? <MultiCardDetails cards={this.cards}/> : ''}
			</div>
		);
	}
}

export default Details;
