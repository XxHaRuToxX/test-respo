import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyled';

import { Home } from './pages/Home';
import { PricingPage } from './pages/PricingPage';
import { SignupPage } from './pages/SignupPage';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/signup' element={<SignupPage/>} />
                    <Route path='/pricing' element={<PricingPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
