import { useEffect } from 'react';
import { Form, Container, Row } from 'react-bootstrap';
import Artists from '../components/Artists';
import Spinner from '../components/Spinner';
import { useFetchSpotify } from '../useFetchSpotify';
const Homepage = ({ searchTerm, setSearchTerm }) => {
	const { fetchAlbums, isLoading, albums } = useFetchSpotify();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (searchTerm) {
				fetchAlbums(searchTerm);
			}
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [searchTerm]);

	if (isLoading) {
		return (
			<Container className="mt-3 text-center">
				<Spinner />
			</Container>
		);
	}
	return (
		<Container className="mt-3">
			<Form>
				<Form.Group className="mb-3 d-flex">
					<Form.Control
						type="text"
						placeholder="Search Artist"
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<Row className="row row-cols-1 row-cols-md-4 g-4">
				{albums.map(album => {
					return <Artists key={album.id} {...album} />;
				})}
			</Row>
		</Container>
	);
};

export default Homepage;
