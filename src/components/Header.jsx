import React from 'react';
import CartButton from '../components/CartButton';
import Logo from '../components/Logo';

function Header() {
	return (
		<header>
			<Logo />
			<CartButton />
		</header>
	);
}

export default Header;
