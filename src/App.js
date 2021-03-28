import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';

import Home from './pages';
import Demo from './pages/demo';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/demo' component={Demo} exact />
            </Switch>
        </Router>
    );
}

export default App;