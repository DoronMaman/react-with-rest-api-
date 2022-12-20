
import { Route, Routes } from 'react-router-dom';
import AllParking from './pages/allParking/allParking';
import NavBar from './components/navBar/navBar';
import NewParking from './pages/new-parking/newParking';
// import AllParking from './pages/allParking';
import FavoritesPage from '../src/pages/favorite-parking/favorite-parking'

function App() {

  return (
    
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllParking />} />
        <Route path="newParking" element={<NewParking />} />
        <Route path='/favorites' element={<FavoritesPage />}>
        
        </Route>

      </Routes>
      {/* <AllParking /> */}
 
    </div>

  );
}

export default App;
