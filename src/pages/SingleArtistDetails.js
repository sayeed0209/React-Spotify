import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFetchSpotify } from '../useFetchSpotify';
import { BsPersonFill, BsTrophyFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import SpotifyPlayer from 'react-spotify-web-playback';
const SingleArtistDetails = ({ searchTerm }) => {
	const { fetchAlbums, albums = [] } = useFetchSpotify();
	const { id } = useParams();
	useEffect(() => {
		if (id) {
			fetchAlbums(searchTerm);
		}
		// eslint-disable-next-line
	}, [id, searchTerm]);
	const searchArtist = albums.find(album => album.id === id);
	if (searchArtist) {
		const {
			external_urls: { spotify },
			followers: { total },
			images,
			popularity,
			name,
		} = searchArtist;

		return (
			<Container fluid className="mt-5">
				<Row>
					<Col>
						<Card className="text-center card h-100">
							<Row>
								<Col>
									<Card.Img variant="top" src={images[0].url} />
								</Col>
								<Col>
									<Card.Body>
										<Card.Title className="fs-2 fw-bold">{name}</Card.Title>
										<Card.Text className="">
											Total followers:
											{<BsPersonFill className="text-warning" />} {total}
										</Card.Text>
										<Card.Text className="">
											Total followers: Popularity:
											{<BsTrophyFill className="text-warning" />}
											{popularity}
										</Card.Text>
										<a href={spotify} className="btn btn-outline-info">
											Listen to {name} on Spotify
										</a>
										{/* <SpotifyPlayer token={accessToken} uris={[uri]} /> */}
										{/* Spotify does not allow to play music on the web without being their premium user */}
									</Card.Body>
									<Link to="/" className="btn btn-outline-warning">
										Back to Home
									</Link>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default SingleArtistDetails;
