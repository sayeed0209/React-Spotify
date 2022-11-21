import { Spinner as LoadingSpinner } from 'react-bootstrap';

const Spinner = () => {
	return (
		<LoadingSpinner animation="border" role="status">
			<span className="visually-hidden">Loading...</span>
		</LoadingSpinner>
	);
};

export default Spinner;
