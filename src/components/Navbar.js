import { Navbar as NavMain, Nav, Container } from 'react-bootstrap';

function Navbar() {
	return (
		<NavMain expand="lg" bg="dark" variant="dark">
			<Container>
				<Nav activeKey="/">
					<Nav.Item>
						<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</NavMain>
	);
}

export default Navbar;
