import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../api/apiUrl';
import { Link } from 'react-router-dom';

class ManageAdmin extends Component {
	state = {
		dataFilm: []
	};

	// Get data film
	componentDidMount() {
		Axios.get(`${API_URL}movies/`)
			.then(res => {
				this.setState({ dataFilm: res.data });
			})
			.catch(err => console.log(err));
	}

	// Delete data
	deleteData = id => {
		Axios.delete(`${API_URL}movies/${id}`)
			.then(res => {
				Axios.get(`${API_URL}movies/`)
					.then(res => {
						this.setState({ dataFilm: res.data });
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	};

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
								<p>{[...val.cast.join(', ')]}</p>
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
						<div className='movie-action'>
							<div className='action-text'>
								<h5>Status</h5>
								<p>{val.status}</p>
							</div>
							<div className='action-button'>
								<h5>Action</h5>
								<Link
									to={`/manage-admin/edit-data/${val.id}`}
									className='btn btn-warning btn-edit'>
									Edit
								</Link>
								<div
									className='btn btn-danger btn-delete'
									onClick={() => this.deleteData(val.id)}>
									Delete
								</div>
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
				<div className='container'>
					<div className='mx-3 mt-4'>
						<Link to='/manage-admin/add-data' className='btn btn-success'>
							Add Data
						</Link>
					</div>
					{this.renderMovieDescriptions()}
				</div>
			</div>
		);
	}
}

export default ManageAdmin;
