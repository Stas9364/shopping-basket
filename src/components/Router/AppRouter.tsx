import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../../Pages";
import {Goods} from "../../Pages";
import {Cart} from "../../Pages";
import {CreateProduct} from "../../Pages/CreateProduct/CreateProduct";
import {Loader} from "../Loader/Loader";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection, db} from "../../firebase/firebase";

export const PATH = {
    login: '/',
    goodsPage: '/goods-page',
    cart: '/card',
    createProduct: '/create-product'
}

export const AppRouter = () => {
    const [goodsArr, loading] = useCollectionData(collection(db, 'Products'));

    if(loading) {
        return <Loader/>
    }

    return (
        <>
            <Routes>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.goodsPage} element={<Goods/>}/>
                <Route path={PATH.cart} element={<Cart/>}/>
                <Route path={PATH.createProduct} element={<CreateProduct/>}/>
                <Route path={'/*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </>
    );
};

