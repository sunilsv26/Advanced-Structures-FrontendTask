
import './App.css';
import HomePage from './homePage/homePage';
import Auth from './auth/auth';

function App() {
  const tokenId = localStorage.getItem('tokenId')
  return (
    <div className="App">
      {tokenId ? <HomePage />:<Auth />}
    </div>
  );
}

export default App;
