import './index.scss'

import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./pages/Layout";

import { Home } from "./pages/Home";

import { Profile } from "./pages/Profile";

import { LogIn } from "./pages/Log";

import { Product } from "./pages/Product";

import React, { useState } from "react";

import { Error } from "./pages/Error";
import { ComponentInProfile } from './pages/components/componentProfile/componentPro';
import { Container } from '@mui/material';




export function App() {

    const [token, setToken] = useState(localStorage.getItem('sEt_tOkEn'))

    return (
        <React.Fragment>

            <Layout setToken={setToken} token={token}>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path='/login' element={token ? <Navigate to='/' /> : <LogIn setToken={setToken} />} />
                    <Route path='/profile' element={token ? <Profile /> : <Navigate to='/login' />}>
                        <Route index element={
                            <Container>
                                <div className='proNav'>
                                    <h4 style={{ marginLeft: '28px' }}>Фото</h4>
                                    <h4 style={{ marginLeft: '56px' }}>Название</h4>
                                    <h4 style={{ marginLeft: '280px' }}>Цена</h4>
                                    <h4 style={{ marginLeft: '120px' }}>Дата</h4>
                                    <h4 style={{ marginLeft: '150px' }}>Действие</h4>
                                </div>
                                <div className='flexComponent'>
                                    <ComponentInProfile />
                                    <ComponentInProfile />
                                    <ComponentInProfile />
                                    <ComponentInProfile />
                                    <ComponentInProfile />
                                </div>
                            </Container>
                        } />
                        <Route path="messages" element={<h1>Messages</h1>} />
                        <Route path="payments&invoice" element={<h1>Payments and invoice</h1>} />
                        <Route path="settings" element={<h1>Settings</h1>} />
                        <Route path="my&ltBusiness" element={<h1>My Business</h1>} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Routes>
            </Layout>

        </React.Fragment>
    )
}