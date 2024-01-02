// Componentes Snippet = "rafce"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import DemosPage from './pages/DemosPage';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Contact from './pages/ContactPage';
import HomePage from './pages/HomePage';
import SecSingup from './layout/SecSingup';
import SecLogin from './layout/SecLogin';
import Footer from './components/Footer';
import { DataContextProvider } from './context/DataContext';

const App = () => {
	return (
		<DataContextProvider>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage/>}/>
						<Route element={<DemosPage/>}>
							<Route path='demos' 
								element={<SecSingup />}/>
							<Route path='/singup' 
								element={<SecSingup />}/>
							<Route path='/login' 
								element={<SecLogin />}/>
						</Route>
						<Route path='about' element={<About/>}/>
						<Route path='contact' element={<Contact/>}/>
						<Route path='error' element={<ErrorPage/>}/>
						<Route path='*' element={<ErrorPage/>}/>
					</Routes>
					<Footer />
				</Router>
		</DataContextProvider>
	)
}

export default App;