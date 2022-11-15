import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About Us</Link>
			</nav>
		</div>
	);
};

export default Navbar;
