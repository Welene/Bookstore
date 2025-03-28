import React from 'react';

function BookItem() {
	return (
		<div>
			<h2 className="bookItem__title">Tittel på bok</h2>
			<p className="bookItem__author">Author Here</p>
			<p className="bookItem__summary"></p>
		</div>
	);
}

export default BookItem;

// når man skal returnere flere elementer må man wrappe det i en "fragment" altså ()
