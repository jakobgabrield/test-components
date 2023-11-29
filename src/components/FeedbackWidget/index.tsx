import React, { useState } from 'react';
import Button from './Button';
import styles from '../../assets/css/tailwind.scss?inline';
import Chat from './Chat';

const FeedbackWidget = ({ cid }: { cid: string }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="absolute bottom-6 right-6 space-y-5 flex flex-col items-end">
			<style>{styles.toString()}</style>
			{open && <Chat />}
			<Button isOpen={open} setIsOpen={setOpen} />
		</div>
	);
};

export default FeedbackWidget;
