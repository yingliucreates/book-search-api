import React from 'react';
import Container from './components/container';
import { Box, Typography } from '@mui/material';

function App() {
	return (
		<Box
			sx={{
				paddingTop: '50px',
				paddingBottom: '50px',
				paddingLeft: '80px',
				paddingRight: '80px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<Typography variant="h1">🔦 Google Books Search 📚</Typography>
			<Container />
		</Box>
	);
}

export default App;
