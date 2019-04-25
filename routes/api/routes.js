const express = require('express');
const router = express.Router();
const mtg = require('mtgsdk');


router.get('/get-card/random', (req, res) => {
	const randomNumber = Math.floor(Math.random() * 5000) + 1;

	mtg.card.find(randomNumber)
		.then(result => {
			res.json({
				card: result.card,
			});
		})
		.catch(err => res.send(err.message));
});

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @description This will get all cards from a set ID
 * @public
 */
router.get('/get-set/set/:set', (req, res, next) => {

	console.log(req.params.set);

	mtg.card.where({ set: req.params.set })
		.then(cards => {
			res.json({
				cards: cards,
			});
		})
		.catch(err => res.send(err.message));
});

module.exports = router;
