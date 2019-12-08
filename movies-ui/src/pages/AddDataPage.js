import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../api/apiUrl';
import { Redirect } from 'react-router';

class AddDataPage extends Component {
	state = {
		fireRedirect: false
	};

	// Post data
	addNewData = e => {
		e.preventDefault();

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

		Axios.post(`${API_URL}movies`, data)
			.then(res => {
				this.setState({ fireRedirect: true });
			})
			.catch(err => console.log(err));
	};

	render() {
		const { from } = this.props.location.state || '/';
		const { fireRedirect } = this.state;
		return (
			<div>
				<div className='container'>
					<div className='add-data-page'>
						<h3>Create New Data</h3>
						<form className='form'>
							<div className='form-group row'>
								<label htmlFor='title' className='col-sm-1 col-form-label'>
									Title
								</label>
								<div className='col-sm-7'>
									<input type='text' ref='title' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='duration' className='col-sm-1 col-form-label'>
									Duration
								</label>
								<div className='col-sm-7'>
									<input type='text' ref='duration' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='cast' className='col-sm-1 col-form-label'>
									Cast
								</label>
								<div className='col-sm-7'>
									<input type='text' ref='cast' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='director' className='col-sm-1 col-form-label'>
									Director
								</label>
								<div className='col-sm-7'>
									<input type='text' ref='director' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='country' className='col-sm-1 col-form-label'>
									Country
								</label>
								<div className='col-sm-7'>
									<select ref='country' className='form-control' defaultValue=''>
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
									<input type='text' ref='studio' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='synopsis' className='col-sm-1 col-form-label'>
									Synopsis
								</label>
								<div className='col-sm-7'>
									<textarea ref='synopsis' cols='20' rows='5' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='trailers' className='col-sm-1 col-form-label'>
									Trailers
								</label>
								<div className='col-sm-7'>
									<input type='text' ref='trailers' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='status' className='col-sm-1 col-form-label'>
									Status
								</label>
								<div className='col-sm-7'>
									<select ref='status' className='form-control' defaultValue=''>
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
									<input type='text' ref='image' className='form-control' />
								</div>
							</div>
							<div className='button-add-data'>
								<button className='btn btn-primary mt-3' onClick={this.addNewData}>
									Create Data
								</button>
							</div>
						</form>
						{fireRedirect && <Redirect to={from || '/manage-admin'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default AddDataPage;
