import React from 'react';
import BookItem from './BookItem';
import data from '../data/books.json';

function BookList() {
	return (
		<>
			<section className="bookListSection">
				{data.slice(0, 12).map((book, index) => (
					<BookItem key={index} book={book} />
				))}
			</section>
		</>
	);
}

export default BookList;
