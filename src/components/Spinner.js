import { Spinner as LoadingSpinner } from 'react-bootstrap';

const Spinner = () => {
	return (
		<LoadingSpinner
			animation="border"
			role="status"
			size="lg"
			variant="warning"
			style={{ width: '4rem', height: '4rem' }}
		>
			<span className="visually-hidden">Loading...</span>
		</LoadingSpinner>
	);
};

export default Spinner;
