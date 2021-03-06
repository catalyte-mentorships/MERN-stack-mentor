import React from 'react';
import _ from 'lodash'


/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param legalities
 * @returns {*}
 * @constructor
 */
const Legalities = (legalities) => {
	return (
		<div className="Legalities">
			<details>
				<summary>Card Legalities</summary>
				<section>
					<div>
						<h4>Format:</h4>
						<h4>Legality</h4>
					</div>
					{legalities.legalities.map((leg, index) => {
						if (!_.isEmpty(leg)) {
							return (
								<div key={index}>
									<h5>{leg.format}:</h5>
									<h5>{leg.legality}</h5>
								</div>
							);
						}
					})}
				</section>
			</details>
		</div>
	);
};

export default Legalities;
