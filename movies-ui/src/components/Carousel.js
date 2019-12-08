import React, { Component } from 'react';
import Slider from 'react-slick';

import Banner1 from '../images/cars-3-banner.jpg';
import Banner2 from '../images/toy-story-4-banner.jpg';
import Banner3 from '../images/incredibles-2-banner.jpg';

export class Carousel extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false
		};

		return (
			<div className='my-5'>
				<Slider {...settings}>
					<div>
						<img src={Banner1} alt='' style={{ height: '550px', width: '100%' }} />
					</div>
					<div>
						<img src={Banner2} alt='' style={{ height: '550px', width: '100%' }} />
					</div>
					<div>
						<img src={Banner3} alt='' style={{ height: '550px', width: '100%' }} />
					</div>
				</Slider>
			</div>
		);
	}
}

export default Carousel;
