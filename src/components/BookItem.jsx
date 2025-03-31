import React from 'react';
import AmountContainer from '../components/Counter';

function BookItem({ book }) {
	return (
		<>
			<article className="bookListSection__bookItem">
				<h2 className="bookListSection__bookItem-title">
					{book.title}
				</h2>
				<p className="bookListSection__bookItem-author">
					{book.author}
				</p>
				<p className="bookListSection__bookItem-summary">{book.desc}</p>
				<AmountContainer />
				{/* <section className="bookListSection__amountContainer">
					<button className="bookListSection__amountContainer-add">
						-
					</button>
					<p className="bookListSection__amountContainer-number">0</p>
					<button className="bookListSection__amountContainer-remove">
						+
					</button>
				</section> */}
			</article>
		</>
	);
}

export default BookItem;

// når man skal returnere flere elementer må man wrappe det i en "fragment" altså ()
