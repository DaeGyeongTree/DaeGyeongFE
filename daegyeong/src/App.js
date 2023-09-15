import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layout';
import MainPage from 'pages/MainPage';
import RecipePage from 'pages/RecipePage';
import Oauth from 'pages/Oauth';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<Oauth />} />
					<Route path="/recipe" element={<RecipePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
