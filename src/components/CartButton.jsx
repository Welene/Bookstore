import React from 'react';

function CartButton({ amount }) {
	return (
		<div className="cartButton">
			<a className="cartButton__link">Cart</a>
			<span className="cartButton__number">{amount}</span>
		</div>
	);
}

export default CartButton;
