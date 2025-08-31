import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './page/LandingPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App
