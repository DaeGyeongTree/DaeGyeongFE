import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layout';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/MainPage/LoginPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
