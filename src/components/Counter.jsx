import React from 'react';
import { useState } from 'react';

function AmountContainer() {
	const [amount, setAmount] = useState(0);
	// setter startamount på knappen under boken her, 0

	const remove = () => {
		if (amount > 0) setAmount(amount - 1);
	};
	const add = () => {
		setAmount(amount + 1);
	};
	return (
		<section className="bookListSection__amountContainer">
			<button
				className="bookListSection__amountContainer-add"
				onClick={remove}>
				-
			</button>
			<p className="bookListSection__amountContainer-number">{amount}</p>
			<button
				className="bookListSection__amountContainer-remove"
				onClick={add}>
				+
			</button>
		</section>
	);
}

export default AmountContainer;
