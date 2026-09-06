import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.tsx'
import Home from './pages/home/home.tsx'
import MainLayout from './compents/MainLayout/MainLayout.tsx';
import Conference from './pages/conference/conference.tsx';
import StockBalance from './pages/stock-balance/StockBalance.tsx';

function App() {

  return (
    <BrowserRouter>

            <Routes>

                {/* Área pública */}

                <Route path="/" element={<Login />} />


                {/* Área logada */}

                <Route element={<MainLayout />}>

                    <Route path="/home" element={<Home />} /> 
                    <Route path="/conference" element={<Conference />} /> 
                    <Route path="/stock-balance" element={<StockBalance />} /> 
                </Route>

            </Routes>

        </BrowserRouter>
  )
}

export default App
