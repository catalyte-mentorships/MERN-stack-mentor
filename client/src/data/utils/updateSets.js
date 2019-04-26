const fs = require('fs');
const path = require('path');

const rawDirectory = `${path.resolve(__dirname, '../raw')}`;
const modifiedDirectory = `${path.resolve(__dirname, '../modified')}`;
const readFilename = 'sets.json';
const writeFileName = 'sets.js';

fs.readFile(`${rawDirectory}/${readFilename}`, (err, data) => {
	if (err) {
		throw err;
	}

	let fileArray = [];
	const file = JSON.parse(data);

	fileArray.push(file);

	 let modifiedArray = fileArray.filter((set) => {
		if ()
	});

	fs.writeFile(`${modifiedDirectory}/${writeFileName}`, (err) => {

	});

	console.log(file);
});
