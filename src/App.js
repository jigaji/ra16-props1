import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div>
      <Stars count={1} />
      <Stars count={4} />
      <Stars count={2} />
    </div>
  );
}

export default App;