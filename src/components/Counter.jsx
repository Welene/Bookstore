import React from 'react';

function AmountContainer() {
	return (
		<section className="bookListSection__amountContainer">
			<button className="bookListSection__amountContainer-add">-</button>
			<p className="bookListSection__amountContainer-number">0</p>
			<button className="bookListSection__amountContainer-remove">
				+
			</button>
		</section>
	);
}

export default AmountContainer;
