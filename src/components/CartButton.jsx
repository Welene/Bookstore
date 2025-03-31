import React from 'react';

function CartButton() {
	return (
		<div className="cartButton">
			<a className="cartButton__link">Cart</a>
			<span className="cartButton__number">0</span>
		</div>
	);
}

export default CartButton;
