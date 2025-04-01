import React from 'react';
// import { useState } from 'react';

function AmountContainer({ amount, setAmount }) {
	// const [amount, setAmount] = useState(0);
	// setter startamount på knappen under boken her, 0

	const remove = () => {
		// console.log('dette er amount', amount);
		if (amount > 0) setAmount(amount - 1);
	};
	const add = () => {
		// console.log('dette er amount', amount);
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
