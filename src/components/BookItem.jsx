import React from 'react';

function BookItem({ book }) {
	return (
		<>
			<h2 className="bookItem__title">{book.title}</h2>
			<p className="bookItem__author">{book.author}</p>
			<p className="bookItem__summary">{book.summary}</p>
		</>
	);
}

export default BookItem;

// når man skal returnere flere elementer må man wrappe det i en "fragment" altså ()
