import React from 'react';
import _ from 'lodash'
import Text from "./Text";
import Legalities from "./Legalities";

const SingleCardDetails = ({ card }) => {
	return (
		<div>
			<h2>Card Details</h2>
			<section>
				<div className="Details__flex-container">
					<div className="Details__image-container">
						<a href={!_.isEmpty(card) ? `https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=${card.multiverseid}` : `${window.location.origin}`} target="__blank">
							<img src={!_.isEmpty(card) ? `${card.imageUrl}` : ''} alt=""/>
						</a>
					</div>
					<div className="Details__text-container">
						{!_.isEmpty(card) ? <Text card={card}/> : ''}
						{!_.isEmpty(card) ? <Legalities legalities={card.legalities}/> : ''}
					</div>
				</div>
			</section>
		</div>
	);
};

export default SingleCardDetails;
