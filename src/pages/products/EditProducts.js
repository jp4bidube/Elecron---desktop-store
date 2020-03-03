import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './styles.css'
// import { Container } from './styles';
import Productform from "../../components/ProductForm";

export default function EditProducts() {
    const { id } = useParams()

    return (
        <div id="app">
            <aside>
                <strong>Editar</strong>
                <Productform id={id} />
            </aside>
        </div>
    );
}
