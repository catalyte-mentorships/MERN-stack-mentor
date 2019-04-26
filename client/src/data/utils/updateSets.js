const fs = require('fs');
const path = require('path');

const rawDirectory = `${path.resolve(__dirname, '../raw')}`;
const modifiedDirectory = `${path.resolve(__dirname, '../modified')}`;
const readFilename = 'sets.json';
const writeFileName = 'sets.json';

fs.readFile(`${rawDirectory}/${readFilename}`, (err, data) => {
	if (err) {
		throw err;
	}

	let fileArray = [];
	const file = JSON.parse(data);
	fileArray.push(file);

	 let modifiedArray = file.data.filter((set) => {
	 	console.log(set);
		if (set.set_type.includes('core') ||
			set.set_type.includes('commander') ||
			set.set_type.includes('masters') ||
			set.set_type.includes('expansion') ||
			set.set_type.includes('archenemy') ||
			set.set_type.includes('planechase') ||
			set.set_type.includes('masterpiece') ||
			set.set_type.includes('box') ||
			set.set_type.includes('memorabilia') ||
			set.set_type.includes('starter') ||
			set.set_type.includes('duel_deck')
		) {
			return set;
		}
	});

	fs.writeFile(`${modifiedDirectory}/${writeFileName}`, JSON.stringify(modifiedArray), (err) => {
		if (err) {
			throw err;
		}
	});
});
