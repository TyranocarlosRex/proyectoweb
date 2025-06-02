import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/Home';
import './index.css'; // si usas Tailwind
import PingModelo3d from './pingModelo3d';

function App() {
  return (
    <div className="App">
      <h1>Prueba API</h1>
      <PingModelo3d />
    </div>
  );
}
export default App;