import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useFetchSpotify } from './useFetchSpotify';
const App = () => {
	const { isLoading, albums } = useFetchSpotify();
	return <div>App</div>;
};

export default App;
