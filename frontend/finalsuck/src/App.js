import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import Login from './auth/Login';
import Signup from './auth/Signup';
import HomePage from './pages/HomePage';
import TripList from './pages/TripList';
import NavComponent from './components/NavComponent';
import TripDetail from './pages/TripDetail';





function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/trip`)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div>
      <header>
        <NavComponent />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} >
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          </Route>
          <Route 
          path="/home" 
          element={
            <TripList>
              {""}
              <HomePage data={trips}/>
              
            </TripList>
          }
          />
          <Route
            path="/trip/:id"
            element={
              <TripList>
                <TripDetail data={trips}/>
              </TripList>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
export default App;

