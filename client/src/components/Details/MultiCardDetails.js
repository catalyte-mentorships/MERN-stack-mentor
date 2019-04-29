import React from 'react';
//import _ from 'lodash';


import '../../scss/multiCardDetails.scss';

const MultiCardDetails = (cards) => {
	console.log(typeof cards);
	console.log(cards);
	console.log(typeof cards.cards.cards);
	console.log(cards.cards.cards);

	let cardsArray = [];
	cardsArray.push(cards);
	console.log(cardsArray[0].cards.cards);

	let imageshtml = cards.cards.cards.map((card, index) => {
		return <div className='set-image-container' key={index}><img src={card.imageUrl} alt="" /></div>;
	});

	return (
		<div className="MultiCardDetails">
			{/*// js-loading-spinner*/}
			{imageshtml}
		</div>
	)
};


export default MultiCardDetails;
