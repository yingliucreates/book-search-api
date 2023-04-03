import React, { useState, useEffect } from 'react';
import List from '../components/list';
import Form from '../components/form';

function Container() {
	const [list, setList] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (!search) return;
		fetch(
			`https://books.googleapis.com/books/v1/volumes?q=${search}&maxResults=3&key=${process.env.REACT_APP_API_KEY}`,
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}
		)
			.then(res => {
				if (res.status > 299 && res.status < 200) throw new Error();
				return res.json();
			})
			.then(data => {
				setList(
					data.items.map(item => [
						item.volumeInfo.title,
						item.volumeInfo.categories?.[0],
						item.volumeInfo.authors?.[0],
						item.volumeInfo.description,
						item.volumeInfo.imageLinks.smallThumbnail
					])
				);
			});
	}, [search]);

	return (
		<div>
			<Form onSubmit={value => setSearch(value)}></Form>
			<List lists={list}></List>
		</div>
	);
}

export default Container;