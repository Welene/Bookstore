import React from 'react';
import BookList from '../components/BookList';

function Main({ amount, setAmount }) {
	console.log('dette er amount main', amount);
	return (
		<>
			<BookList amount={amount} setAmount={setAmount} />
		</>
	);
}

export default Main;
