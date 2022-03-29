import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavBar from './components/NavBar';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './components/NotFound';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';


const App = () => {
  const alert = useSelector(state=> state.alert)
  return (
    <>
      <Router>
        <NavBar />
        {alert && <Alert variant={alert.variant}>{alert.text}</Alert>}
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
