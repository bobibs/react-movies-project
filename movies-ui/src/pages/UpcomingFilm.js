import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../api/apiUrl';
import { Link } from 'react-router-dom';

class UpcomingFilm extends Component {
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
						alt='section1'
						src='https://wallpapertag.com/wallpaper/full/c/0/7/147096-most-popular-finding-dory-wallpaper-1920x1080-hd.jpg'
					/>
				</div>

				<div className='section-3'>
					<div className='container'>
						<div className='label-text'>
							<a href='/' className='btn btn-secondary'>
								Back To Home
							</a>
						</div>
						<div className='row'>{this.renderUpcomingMovies()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UpcomingFilm;
