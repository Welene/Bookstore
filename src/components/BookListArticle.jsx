import React from 'react';
import BookItem from '../components/BookItem';
import data from '../data/books.json';

function BookListArticle() {
	return (
		<>
			{data.map((book, index) => (
				<BookItem key={index} book={book} />
			))}
		</>
	);
}

export default BookListArticle;
