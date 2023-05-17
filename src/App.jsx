import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
	return (
		<Router>
			<Header />
			<main className='container content'>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/login' element={<LoginScreen />} />
					<Route path='/register' element={<RegisterScreen />} />
					<Route path='/user-profile' element={<ProfileScreen />} />
				</Routes>
			</main>
		</Router>
	)
}

export default App
