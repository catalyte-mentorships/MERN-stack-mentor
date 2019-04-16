import React from 'react';
import _ from 'lodash'

const Text = ({ card }) => {
	return (
		<div>
			<h4>{!_.isEmpty(card.name) ? `Name: ${card.name}` : ''}</h4>
			<h5>{!_.isEmpty(card.setName) ? `Set: ${card.setName}` : ''}</h5>
			<h5>{!_.isEmpty(card.artist) ? `Artist: ${card.artist}`: ''}</h5>
			<h5>{!_.isEmpty(card.type) ? `Type: ${card.type}` : ''}</h5>
			<h5>{!_.isEmpty(card.rarity) ? `Rarity: ${card.rarity}` : ''}</h5>
		</div>
	);
};

export default Text;
