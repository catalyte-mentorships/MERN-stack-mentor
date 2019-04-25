import React, { Component } from 'react';



class Search extends Component {
	render() {
		return(
			<div className="Search">
				<h2>Search</h2>
				<div className="search__button" id="random">
					<p>Random Card?</p>
				</div>
				<div className="search__sets">
					<datalist id="ice-cream-flavors">
						<option value="Chocolate">
						<option value="Coconut">
						<option value="Mint">
						<option value="Strawberry">
						<option value="Vanilla">
					</datalist>
					<div className="search__button" id="sets">
						<p>Search</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;