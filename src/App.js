import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import React from 'react';
// import About from './About';
const LazyAbout = React.lazy(() => import('./About'));

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* <BrowserRouter> */}
				<Routes>
					<Route path='/' element={<Home />}>
						Home
					</Route>
					<Route
						path='/about'
						element={
							<React.Suspense fallback='Loading...'>
								<LazyAbout />
							</React.Suspense>
						}
					>
						About
					</Route>
				</Routes>
			</header>
		</div>
	);
}

export default App;
