import { useState } from 'react';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

function App() {
	const [amount, setAmount] = useState(0);

	return (
		<>
			<Header amount={amount} />
			<Main amount={amount} setAmount={setAmount} />
		</>
	);
}

export default App;
