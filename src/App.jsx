import Nav from './components/Nav.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter.jsx';

const App = () => {
  return (
    <div className='position-absolute top-0 start-50 translate-middle-x bg-dark'>
      <Router>
        <div className='my-5 py-2'>
          <Nav />
        </div>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;