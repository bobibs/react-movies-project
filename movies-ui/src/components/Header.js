import React, { Component } from 'react';
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import Logo from '../images/universal-kids-logo.png';

export class Header extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div>
				<Navbar expand='md' className='navbar'>
					<Container>
						<NavbarBrand href='/' className='navbar-brand'>
							<img alt='Logo' src={Logo} />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<NavLink href='/now-playing' className='nav-link'>
										Now Playing
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href='/upcoming-film' className='nav-link'>
										Upcoming Film
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default Header;
