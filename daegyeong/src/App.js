import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layout';
import MainPage from 'pages/MainPage';
import RecipePage from 'pages/RecipePage';
import DetailPage from 'pages/ DetailPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/recipe" element={<RecipePage />} />
					<Route path="/Detail/:id" element={<DetailPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
