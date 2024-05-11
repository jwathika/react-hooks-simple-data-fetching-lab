import React, { useEffect, useState } from 'react';

const App = () => {
	const [image, setImage] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((res) => res.json())
			.then((res) => {
				setImage(res.message);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error');
				setLoading(false);
			});
	}, []);
	return (
		<div>
			{image ? <img src={image} alt='A Random Dog' /> : <p>Loading...</p>}
		</div>
	);
};

export default App;
