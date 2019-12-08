import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../api/apiUrl';

class ViewDetailsPage extends Component {
	state = {
		dataFilm: []
	};

	// Get data film
	componentDidMount() {
		const { id } = this.props.match.params;
		Axios.get(`${API_URL}movies/${id}`)
			.then(res => {
				this.setState({ dataFilm: [res.data] });
				console.log(this.state);
			})
			.catch(err => console.log(err));
	}

	// Display film details
	renderMovieDescriptions = () => {
		const { dataFilm } = this.state;
		return dataFilm.map((val, index) => {
			return (
				<div className='container'>
					<div className='movie-details'>
						<div className='movie-image'>
							<img alt={val.title} src={val.image} />
						</div>
						<div className='movie-description'>
							<div className='movie-title'>
								<h5>Title</h5>
								<p>{val.title}</p>
							</div>
							<div className='movie-duration'>
								<h5>Duration</h5>
								<p>{val.duration} min</p>
							</div>
							<div className='movie-cast'>
								<h5>Cast</h5>
								<p>{val.cast}</p>
							</div>
							<div className='movie-director'>
								<h5>Director</h5>
								<p>{val.director}</p>
							</div>
							<div className='movie-country'>
								<h5>Country</h5>
								<p>{val.country}</p>
							</div>
							<div className='movie-studio'>
								<h5>Studio</h5>
								<p>{val.studio}</p>
							</div>
						</div>
					</div>
					<div className='movie-synopsis'>
						<h5>Synopsis</h5>
						<p>{val.synopsis}</p>
					</div>
					<div className='movie-trailers'>
						<h5>Trailers</h5>
						<div className='videos'>
							<iframe
								title='Trailers 1'
								className='trailers'
								width='560'
								height='315'
								src={val.trailers[0]}
								frameBorder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							/>
							<iframe
								title='Trailers 2'
								className='trailers'
								width='560'
								height='315'
								src={val.trailers[1]}
								frameBorder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							/>
						</div>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<div className='container mt-5'>
					<a href='/' className='btn btn-secondary ml-3'>
						Back To Home
					</a>
					{this.renderMovieDescriptions()}
				</div>
			</div>
		);
	}
}

export default ViewDetailsPage;
