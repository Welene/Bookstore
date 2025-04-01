import React from 'react';
import CartButton from '../components/CartButton';
import Logo from '../components/Logo';

function Header({ amount }) {
	console.log('Current amount:', amount);
	return (
		<header>
			<Logo />
			<CartButton amount={amount} />
		</header>
	);
}

export default Header;
