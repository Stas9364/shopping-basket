import React, {useEffect} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {Navigate} from "react-router-dom";
import {Product} from "./Product/Product";
import {useAppDispatch, useAppSelector} from "../../utils";
import {Container, Grid} from "@mui/material";
import {getGoodsFromLS, getGoodsTC, selectProductTC} from "./goodsReducer";
import {addToCartAC, InitialStateType} from "../Card/cartReducer";
import {auth} from "../../firebase/firebase";
import {goodsSelector} from "./selectors";

export const Goods = () => {
    const dispatch = useAppDispatch();

    const [user] = useAuthState(auth);

    useEffect(() => {
        if ('goods' in localStorage) {
            dispatch(getGoodsFromLS());
        } else {
            dispatch(getGoodsTC());
        }
    }, [dispatch]);

    const goods = useAppSelector(goodsSelector);

    const sendToCart = async (id: string) => {
        dispatch(
            addToCartAC(
                goods.find(p => p.id === id) as InitialStateType
            )
        );
        await dispatch(selectProductTC(id, true));
    };

    if (!user) {
        return <Navigate to={'/'}/>
    }

    return (
        <Container>
            <Grid container >
                {goods.map(el => {
                    return (
                        <Product
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            price={el.price}
                            description={el.description}
                            image={el.image}
                            isSelected={el.isSelected}
                            sendToCard={sendToCart}
                        />
                    )
                })}
            </Grid>
        </Container>
    );
};

