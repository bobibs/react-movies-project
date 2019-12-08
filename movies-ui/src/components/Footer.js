import React, { Component } from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaEnvelope
} from 'react-icons/fa';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footer-icon'>
					<a href='/' className='facebook'>
						<FaFacebookF />
					</a>
					<a href='/' className='instagram'>
						<FaInstagram />
					</a>
					<a href='/' className='twitter'>
						<FaTwitter />
					</a>
					<a href='/' className='email'>
						<FaEnvelope />
					</a>
				</div>
				<div className='footer-text'>
					<p>&copy; 2019 - Bobi Basari / JC 11 Web & Mobile Development</p>
				</div>
			</div>
		);
	}
}

export default Footer;
