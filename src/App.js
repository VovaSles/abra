import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavBar from './components/NavBar';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exect path="/" element={<SearchPage/>} />
          <Route path="/favorites" element={<FavoritesPage/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>ְ
    </>
  );
}

export default App;
