import React, { Component } from 'react';
import _ from 'lodash'

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
		console.log(props);
	}

	componentWillReceiveProps(props) {
		if (!props.isSet) {
			// the individual card details
			const { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, } = props.card;
			this.card = { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, };
		} else if (props.isSet) {
			// a set of cards
//			console.log(props.card);
			this.cards = props.card;
			console.log(typeof props.card);
		}
	}

	render() {
		return (
			<div className="Details">
				{/*<div className="spinner"></div>*/}
				{!this.props.isSet && !_.isEmpty(this.props.card) ? <SingleCardDetails card={this.card} /> : ''}
				{this.props.isSet && !_.isEmpty(this.props.card) ? <MultiCardDetails cards={this.cards}/> : ''}
			</div>
		);
	}
}

export default Details;
