import React from 'react';

const Home = () => {
	return (
		<div>
			<div>I &apos m the NEW BEST home component</div>
			<button onClick={() => console.log('Hi There!')}>Press Me!</button>
		</div>
	);
};

export default {
	component: Home
};
