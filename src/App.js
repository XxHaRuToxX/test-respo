import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import GlobalStyle from './globalStyled';

import { Home } from './pages/Home';
import { PricingPage } from './pages/PricingPage';
import { SignupPage } from './pages/SignupPage';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/signup' element={<SignupPage/>} />
                    <Route path='/pricing' element={<PricingPage/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}
