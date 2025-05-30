import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/Home';
import './index.css'; // si usas Tailwind

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;