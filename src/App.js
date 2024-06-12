import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import AppHeader from './components/header';
import AboutUs from './components/about';
import Body from './components/body';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Body />
      <AboutUs />
    </div>
  );
}

export default App;
