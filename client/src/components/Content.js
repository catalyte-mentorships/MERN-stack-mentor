import React, { Component } from 'react';


//import Search from './Search';
import Details from './Details/Details';

import '../scss/search.scss';

import { getFetch } from "../utils/promises";
import setsData from '../data/modified/sets.json';


/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * class Content
 * @extends React.Component
 *
 */
class Content extends Component {

	constructor() {
		super();

		this.state = {
			card: '',
			isSet: false,
		};

		this.getCard = this.getCard.bind(this);

		// local variables
		this.defaultSelectOption = 'Select Set';

		console.log(setsData)
	}

	/**
	 * @author Keith Murphy | nomadmystics@gmail.com
	 * @param {Object} event
	 * @return void
	 */
	clickEvents(event) {
		event.persist();

		if (event.target && event.target.id === 'random') {
			this.getCard(`${window.location.href}api/routes/get-card/random`, false);
		} else if (event.target && event.target.id === 'sets') {
			const magicSetsSelectElement = window.document.getElementById('magic-sets');
			const selectedValue = magicSetsSelectElement.options[magicSetsSelectElement.selectedIndex].value;

			if (selectedValue !== this.defaultSelectOption) {
				const set = setsData.filter((set, index) => {
					if (set.name === selectedValue) {
						console.log(set);
						console.log(set.code);
						return set;
					}
				});
				this.getCard(`${window.location.href}api/routes/get-set/set/${set[0].code}`, true);
			}
		}
	}

	/**
	 * @author Keith Murphy | nomadmystics@gmail.com
	 * @param {string} url
	 * @param {boolean} isSet
	 */
	getCard(url, isSet = false) {
		getFetch(url).then(results => {
			const data = !isSet ? results.card : results;

			this.setState({
				card: data,
				isSet: isSet,
			});
		});
	}

	/**
	 * @author Keith Murphy | nomadmystics@gmail.com
	 * @returns {*}
	 */
	render() {
		return (
			<div className="app__main-grid">
				<div className="search">
					<h2>Search</h2>
					<div className="search__button" id="random" onClick={(e) => this.clickEvents(e)}>
						Random Card?
					</div>
					<div className="search__sets">
						<div className="select">
							<label htmlFor="ice-cream-choice">Choose a flavor:</label>
							<select id="magic-sets" ref="magic-sets">
								<option>{this.defaultSelectOption}</option>
								{ setsData.map((set, index) => {
									return <option key={index}>{set.name}</option>
								})}
							</select>
						</div>
						<div className="search__button" id="sets" onClick={(e) => this.clickEvents(e)}>
							Search
						</div>
					</div>
				</div>
				<Details card={this.state.card} isSet={this.state.isSet}/>
			</div>
		)
	}
}

export default Content;
