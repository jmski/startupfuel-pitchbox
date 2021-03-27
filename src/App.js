import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';

import Home from './pages';

const App = () => {
    return (
        <Router>
            <Home />
        </Router>
    );
}

export default App;