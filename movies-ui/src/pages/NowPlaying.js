import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../api/apiUrl';
import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel';

class NowPlaying extends Component {
	state = {
		dataFilm: []
	};

	// Get data film
	componentDidMount() {
		Axios.get(`${API_URL}movies`)
			.then(res => {
				this.setState({ dataFilm: res.data });
			})
			.catch(err => console.log(err));
	}

	// Display data film - Now Playing
	renderNowPlaying = () => {
		const { dataFilm } = this.state;
		return dataFilm.map((val, index) => {
			if (val.status === 'Playing Now') {
				return (
					<div className='col-md-4' key={index}>
						<div className='card'>
							<img alt={val.title} src={val.image} />
							<div className='card-title'>
								<p className='m-2'>{val.title}</p>
							</div>
							<div className='card-text'>
								<Link to='/' className='btn btn-sm btn-outline-primary'>
									Book Now
								</Link>
								<Link
									to={`/view-details/${val.id}`}
									className='btn btn-sm btn-outline-warning'>
									View Details
								</Link>
							</div>
						</div>
					</div>
				);
			}
		});
	};

	render() {
		return (
			<div>
				<Carousel />
				<div className='section-2'>
					<div className='container'>
						<div className='label-text'>
							<Link to='/' className='btn btn-secondary'>
								Back To Home
							</Link>
						</div>
						<div className='row'>{this.renderNowPlaying()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NowPlaying;
