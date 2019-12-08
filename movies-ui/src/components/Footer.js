import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					<Link to='/' className='facebook'>
						<FaFacebookF />
					</Link>
					<Link to='/' className='instagram'>
						<FaInstagram />
					</Link>
					<Link to='/' className='twitter'>
						<FaTwitter />
					</Link>
					<Link to='/' className='email'>
						<FaEnvelope />
					</Link>
				</div>
				<div className='footer-text'>
					<p>&copy; 2019 - Bobi Basari / JC 11 Web & Mobile Development</p>
				</div>
			</div>
		);
	}
}

export default Footer;
