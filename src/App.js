import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';

import Home from './pages/home';

function App() {
  return (
    <>
      <Router>
				<Switch>
					<Route path='/' component={Home} exact />
				</Switch>
				<GlobalStyles />

      </Router>
    </>
  );
}

export default App;
