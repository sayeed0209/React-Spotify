import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SingleArtistDetails from './pages/SingleArtistDetails';
import Navbar from './components/Navbar';
const App = () => {
	const [searchTerm, setSearchTerm] = useState(() => 'Taylor Swift');
	return (
		<Router>
			<Navbar />
			<main>
				<Container>
					<Routes>
						<Route
							index
							element={
								<Homepage
									searchTerm={searchTerm}
									setSearchTerm={setSearchTerm}
								/>
							}
						/>
						<Route
							path="/artist/:id"
							element={<SingleArtistDetails searchTerm={searchTerm} />}
						/>
					</Routes>
				</Container>
			</main>
		</Router>
	);
};

export default App;
