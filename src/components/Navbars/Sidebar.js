import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo from 'assets/images/reactlogo.png';
import sidebarImage from 'assets/images/default.jpg';
import NavbarLinks from './NavbarLinks';
import Users from '../users';

const Sidebar = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const update = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		update();
		window.addEventListener('resize', update());
	}, []);

	return (
		<div id='sidebar' className='sidebar' data-color={'black'} data-image={sidebarImage}>
			<div className='sidebar-background' style={{backgroundImage: `url(${sidebarImage})`}} />
			<div className='logo'>
				<Link to='/' className='simple-text logo-mini'>
					<div className='logo-img'>
						<img src={logo} alt='logo_image' />
					</div>
				</Link>
				<Link to='/' className='simple-text logo-normal'>
					Mensaje
				</Link>
			</div>
			<div className='sidebar-wrapper'>
				<ul className='nav'>
					{width <= 991 ? <NavbarLinks /> : null}
					<Nav justify variant='tabs' defaultActiveKey='all'>
						<Nav.Item>
							<Nav.Link eventKey='all'>All</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey='recent'>Recent</Nav.Link>
						</Nav.Item>
					</Nav>
					<Users />
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;