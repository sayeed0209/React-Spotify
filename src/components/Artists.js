import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Artists = ({ id, name, images, uri }) => {
	let imgSrc;
	if (images.length > 0) {
		imgSrc = images[0].url;
	}
	if (images.length === 0) {
		imgSrc =
			'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
	}
	return (
		<Col>
			<Card className="h-100">
				<Card.Img src={imgSrc} alt={name} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Link to={`/artist/${id}`} className="btn btn-outline-info">
						See More
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Artists;
