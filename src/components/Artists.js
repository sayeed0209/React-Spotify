import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Artists = ({ id, name, images, uri }) => {
	let imgSrc;
	if (images.length > 0) {
		imgSrc = images[0].url;
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
