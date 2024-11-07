import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignUpPage from './pages/SignUpPage';
import LoginForm from './pages/LoginPage';
import Movies from './pages/Movies'; 
import AddMovie from './pages/AddMovies';
import RoomList from './pages/RoomList'; 
import SessionList from './pages/SessionList'; 
import AddSession from './pages/AddSession'; 

function App() {
    const isUserSignedIn = !!localStorage.getItem('token');

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/login' element={<LoginForm />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/movies' element={isUserSignedIn ? <Movies /> : <Navigate to='/login' />} />
                {isUserSignedIn && (
                    <>
                        <Route path='/add-movie' element={<AddMovie />} />
                        <Route path='/rooms' element={<RoomList />} /> 
                        <Route path='/sessions' element={<SessionList />} /> 
                        <Route path='/add-session' element={<AddSession />} /> 
                        {/* <Route path='/add-room' element={<AddRoom />} />  */}
                    </>
                )}
            </Routes>
        </div>
    );
}

export default App;
