import React from 'react';
import Home from './screens/Home';

const Chat = () => {
	const [screen, setScreen] = React.useState('home');

	const getScreen = () => {
		return <Home />;
	};

	return (
		<div className="rounded-md flex flex-col overflow-hidden shadow-lg border-gray-50 border transform transition-all h-screen w-full sm:w-[22em] sm:h-[30rem]">
			<div className="w-full p-2 flex justify-center bg-white font-semibold">
				{screen.toUpperCase()}
			</div>
			<div className="w-full flex-1 justify-center bg-gray-100 overflow-auto">
				{getScreen()}
			</div>
			<div className="w-full p-2 flex justify-center bg-white shadow-md text-xs">
				Powered by DynamoWidgets
			</div>
		</div>
	);
};

export default Chat;
