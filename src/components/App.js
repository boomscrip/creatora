import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import SingleLineGridList from './gridlist';
import Slider from './Slider'
import RecipeReviewCard from './News-card'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OtzyvCard from './OtzyvCard'




function App() {
	return (
		<div>
					<Header />

					<div className="container">
					<Slider />
					<OtzyvCard />
					<RecipeReviewCard />
					</div>
		</div>
	)
}


export default App;
