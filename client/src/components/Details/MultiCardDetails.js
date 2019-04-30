import React from 'react';
//import _ from 'lodash';


import '../../scss/multiCardDetails.scss';

const MultiCardDetails = (cards) => {

	console.log(cards);

	const reformattedCards = cards.cards;
	console.log(reformattedCards);
	const baseGathererUrl = `https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=`;

	let imageshtml = reformattedCards.map((card, index) => {
		let cardUrl ='';
		cardUrl += baseGathererUrl;
		cardUrl += card.multiverseid;

		return <div className='set-image-container' key={index}>
			<a href={cardUrl} target="_blank">
				<img src={card.imageUrl} alt="" />
			</a>
		</div>;
	});

	return (
		<div className="MultiCardDetails">
			{/*// js-loading-spinner*/}
			{imageshtml}
		</div>
	)
};

export default MultiCardDetails;
