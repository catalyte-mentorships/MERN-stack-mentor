import React, { Component } from 'react';
import _ from 'lodash'

import Text from './Text';
import Legalities from './Legalities';

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
		const { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, } = props.card;
		this.card = { multiverseid, imageUrl, name, setName, artist, type, rarity, legalities, };
	}

	render() {
		return (
			<div className="Details">
				<h2>Card Details</h2>
				<section>
					<div className="Details__flex-container">
						<div className="Details__image-container">
							<a href={!_.isEmpty(this.props.card) ? `https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=${this.card.multiverseid}` : `${window.location.origin}`} target="__blank">
								<img src={!_.isEmpty(this.props.card) ? `${this.card.imageUrl}` : ''} alt=""/>
							</a>
						</div>
						<div className="Details__text-container">
							{!_.isEmpty(this.props.card) ? <Text card={this.card}/> : ''}
							{!_.isEmpty(this.props.card) ? <Legalities legalities={this.card.legalities}/> : ''}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Details;
