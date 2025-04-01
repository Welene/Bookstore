import React from 'react';
import BookItem from './BookItem';
import data from '../data/books.json';

function BookList({ amount, setAmount }) {
	console.log('dette er amount BookLIST', amount);
	return (
		<>
			<section className="bookListSection">
				{data.slice(0, 12).map((book, index) => (
					<BookItem
						key={index}
						book={book}
						amount={amount}
						setAmount={setAmount}
					/>
				))}
				{/* <AmountContainer amount={amount} setAmount={setAmount} /> */}
			</section>
		</>
	);
}

export default BookList;
