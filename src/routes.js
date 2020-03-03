import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Products from './pages/products/index'
import EditProducts from './pages/products/EditProducts'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/edit/:id' element={<EditProducts />} />
        </Routes>
    );
}