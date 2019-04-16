import React, { Component } from 'react';
import _ from 'lodash'

import Text from './Text';
import Legalities from './Legalities';

import '../../scss/details.scss';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * class Details
 * @extends React.Component
 */
class Details extends Component {
	componentWillReceiveProps(props) {
		console.log(props);
		this.card = {};
		this.card.link = `https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=${props.card.multiverseid}`;
		this.card.image = props.card.imageUrl;
		this.card.name = props.card.name;
		this.card.setName = props.card.setName;
		this.card.artist = props.card.artist;
		this.card.type = props.card.type;
		this.card.rarity = props.card.rarity;
		this.card.legalities = props.card.legalities;
	}

	render() {
		return (
			<div className="Details">
				<h3>Card Details</h3>
				<section>
					<div className="Details__flex-container">
						<div className="Details__image-container">
							<a href={!_.isEmpty(this.props.card) ? `${this.card.link}` : `${window.location.origin}`} target="__blank">
								<img src={!_.isEmpty(this.props.card) ? `${this.card.image}` : ''} alt=""/>
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
