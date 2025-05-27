import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar';
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App
