import React, { Component } from 'react';
import _ from 'lodash'

// my modules
import SingleCardDetails from './SingleCardDetails';

import '../../scss/details.scss';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * class Details
 *
 *
 *
 * @extends React.Component
 */
class Details extends Component {
	componentWillReceiveProps(props) {

		console.log(props);

		if (!props.isSet) {
			const { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, } = props.card;
			this.card = { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, };
		} else if (props.isSet) {
			console.log(props.card)
		}
	}

	render() {
		return (
			<div className="Details">
				{!this.props.isSet ? <SingleCardDetails card={this.card}/> : ''}
			</div>
		);
	}
}

export default Details;
