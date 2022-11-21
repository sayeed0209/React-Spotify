import React, { useState, useEffect } from 'react';
export const useFetchSpotify = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [accessToken, setAccessToken] = useState('');
	const [albums, setAlbums] = useState([]);
	const TOKEN_URL = 'https://accounts.spotify.com/api/token';
	const ALBUM_URL = 'https://api.spotify.com/v1/search';
	const CLIENT_ID = '0802c2dcdd7c4579b6a737b8b03caf4d';
	const CLIENT_SECRET = '908f662ceab2405ca20e3b51e8becffc';
	const fetchToken = async () => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body:
				'grant_type=client_credentials&client_id=' +
				CLIENT_ID +
				'&client_secret=' +
				CLIENT_SECRET,
		};
		try {
			const response = await fetch(TOKEN_URL, options);
			const results = await response.json();
			setAccessToken(results.access_token);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbums = async () => {
		setIsLoading(true);
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + accessToken,
			},
		};
		try {
			const response = await fetch(
				`${ALBUM_URL}?q=Taylor Swift&type=artist`,
				options
			);
			const results = await response.json();
			console.log(results);
			setAlbums(results.artists.items);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchToken();
		fetchAlbums();
	}, []);

	return { isLoading, albums };
};
