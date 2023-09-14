import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layout';
import MainPage from 'pages/MainPage';
import Oauth from 'pages/Oauth';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<Oauth />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
