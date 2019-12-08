import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../api/apiUrl';
import { Link } from 'react-router-dom';

class HomePage extends Component {
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
								<a href='/' className='btn btn-sm btn-outline-primary'>
									Book Now
								</a>
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

	// Display data film - Now Playing
	renderUpcomingMovies = () => {
		const { dataFilm } = this.state;
		return dataFilm.map((val, index) => {
			if (val.status === 'Coming Soon') {
				return (
					<div className='col-md-4' key={index}>
						<div className='card'>
							<img alt={val.title} src={val.image} />
							<div className='card-title'>
								<p className='m-2'>{val.title}</p>
							</div>
							<div className='card-text'>
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
				<div className='section-1'>
					<img
						alt='section-1'
						src='https://musicart.xboxlive.com/7/4e614a00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
					/>
				</div>

				<div className='section-2'>
					<div className='container'>
						<div className='label-text'>
							<h4>Now Playing</h4>
							<a href='/now-playing' className='btn btn-secondary'>
								View More
							</a>
						</div>
						<div className='row'>{this.renderNowPlaying()}</div>
					</div>
				</div>

				<div className='section-3'>
					<div className='container'>
						<div className='label-text'>
							<h4>Upcoming Film</h4>
							<a href='/upcoming-film' className='btn btn-secondary'>
								View More
							</a>
						</div>
						<div className='row'>{this.renderUpcomingMovies()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
