import React, { Component } from 'react';

import '../scss/details.scss';

class Details extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(props) {
		console.log(props);
		this.link = `https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=${props.card.multiverseid}`;
		this.image = props.card.imageUrl;
		this.name = props.card.name;
		this.setName = props.card.setName;
		this.artist = props.card.artist;
		this.type = props.card.type;
	}

	render() {
		return (
			<div className="Details">
				<h3>Card Details</h3>
				<section>
					<div className="Details__flex-container">
						<div className="Details__image-container">
							<a href={this.link} target="__blank">
								<img src={this.image} alt=""/>
							</a>
						</div>
						<div className="Details__text-container">
							<h4 className="name">Name: {this.name}</h4>
							<h5>Set: {this.setName}</h5>
							<h5>Artist: {this.artist}</h5>
							<h5>Type: {this.type}</h5>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Details;