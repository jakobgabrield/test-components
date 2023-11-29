import { HandRaisedIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Button = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (state: boolean) => void;
}) => {
	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className="rounded-full w-12 h-12 bg-blue-500 flex justify-center items-center shadow-md cursor-pointer p-2 text-white"
		>
			{isOpen ? <ChevronDownIcon /> : <HandRaisedIcon />}
		</div>
	);
};

export default Button;
