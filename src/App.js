import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HabitPage from "./pages/HabitPage/HabitPage"
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/cadastro" element={<SignUpPage />} />
				<Route path="/hoje" element={<TodayPage />} />
				<Route path="/habitos" element={<HabitPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
