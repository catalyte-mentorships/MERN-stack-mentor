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

router.get('/get-set', (req, res, next) => {
	mtg.set.find('AER')
		.then(result => {
			res.json({
				set: result.set.name,
			});
		})
		.catch(err => res.send(err.message));
});

module.exports = router;
