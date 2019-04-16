const getFetch = (url) => {
	return fetch(url)
		.then(results => {
			console.log(url);
			console.log(results);
			return results.json();
		})
		.catch(err => console.error(err));
};

export {
	getFetch,
}