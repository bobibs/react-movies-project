import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../api/apiUrl';
import { Redirect } from 'react-router';

class EditDataPage extends Component {
	state = {
		dataFilm: [],
		fireRedirect: false
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		Axios.get(`${API_URL}movies/${id}`)
			.then(res => {
				this.setState({ dataFilm: [res.data] });
			})
			.catch(err => console.log(err));
	}

	// Update data edit
	editData = id => {
		// Get value
		const title = this.refs.title.value;
		const duration = this.refs.duration.value;
		const getCast = this.refs.cast.value;
		const cast = getCast.split(',');
		const director = this.refs.director.value;
		const country = this.refs.country.value;
		const studio = this.refs.studio.value;
		const synopsis = this.refs.synopsis.value;
		const getTrailers = this.refs.trailers.value;
		const trailers = getTrailers.split(',');
		const status = this.refs.status.value;
		const image = this.refs.image.value;

		const data = {
			image,
			title,
			duration,
			cast,
			director,
			country,
			studio,
			synopsis,
			trailers,
			status
		};

		Axios.put(`${API_URL}movies/${id}`, data)
			.then(res => {
				this.setState({ fireRedirect: true });
				return false;
			})
			.catch(err => console.log(err));
	};

	renderDataEdit = () => {
		return this.state.dataFilm.map((val, index) => {
			return (
				<form className='form' key={index}>
					<div className='form-group row'>
						<label htmlFor='title' className='col-sm-1 col-form-label'>
							Title
						</label>
						<div className='col-sm-7'>
							<input
								type='text'
								ref='title'
								className='form-control'
								defaultValue={val.title}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='duration' className='col-sm-1 col-form-label'>
							Duration
						</label>
						<div className='col-sm-7'>
							<input
								type='text'
								ref='duration'
								className='form-control'
								defaultValue={val.duration}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='cast' className='col-sm-1 col-form-label'>
							Cast
						</label>
						<div className='col-sm-7'>
							<input
								type='text'
								ref='cast'
								className='form-control'
								defaultValue={val.cast}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='director' className='col-sm-1 col-form-label'>
							Director
						</label>
						<div className='col-sm-7'>
							<input
								type='text'
								ref='director'
								className='form-control'
								defaultValue={val.director}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='country' className='col-sm-1 col-form-label'>
							Country
						</label>
						<div className='col-sm-7'>
							<select
								ref='country'
								className='form-control'
								defaultValue={val.country}>
								<option selected hidden>
									Choose One
								</option>
								<option value='USA'>USA</option>
								<option value='Indonesia'>Indonesia</option>
							</select>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='studio' className='col-sm-1 col-form-label'>
							Studio
						</label>
						<div className='col-sm-7'>
							<input
								type='text'
								ref='studio'
								className='form-control'
								defaultValue={val.studio}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='synopsis' className='col-sm-1 col-form-label'>
							Synopsis
						</label>
						<div className='col-sm-7'>
							<textarea
								ref='synopsis'
								cols='20'
								rows='5'
								className='form-control'
								defaultValue={val.synopsis}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='trailers' className='col-sm-1 col-form-label'>
							Trailers
						</label>
						<div className='col-sm-7'>
							<input
								type='text'
								ref='trailers'
								className='form-control'
								defaultValue={val.trailers}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='status' className='col-sm-1 col-form-label'>
							Status
						</label>
						<div className='col-sm-7'>
							<select ref='status' className='form-control' defaultValue={val.status}>
								<option selected hidden>
									Choose One
								</option>
								<option value='Playing Now'>Playing Now</option>
								<option value='Coming Soon'>Coming Soon</option>
							</select>
						</div>
					</div>
					<div className='form-group row'>
						<label htmlFor='image' className='col-sm-1 col-form-label'>
							Image
						</label>
						<div className='col-sm-7'>
							<input
								type='text'
								ref='image'
								className='form-control'
								defaultValue={val.image}
							/>
						</div>
					</div>
					<div className='button-edit-data'>
						<button
							className='btn btn-primary'
							onClick={e => this.editData(val.id, e)}>
							Edit Data
						</button>
					</div>
				</form>
			);
		});
	};

	render() {
		const { from } = this.props.location.state || '/';
		const { fireRedirect } = this.state;

		return (
			<div>
				<div className='container'>
					<div className='edit-data-page'>
						<h3>Edit Data</h3>
						{this.renderDataEdit()}
						{fireRedirect && <Redirect to={from || '/manage-admin'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default EditDataPage;
