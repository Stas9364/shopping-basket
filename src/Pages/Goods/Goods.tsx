import React, {useEffect} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {Navigate} from "react-router-dom";
import {Product} from "./Product/Product";
import {useAppDispatch, useAppSelector} from "../../utils";
import {Container, Grid} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {getGoodsTC, selectProductTC} from "./goodsReducer";
import {addToCardAC, InitialStateType} from "../Card/cardReducer";
import {auth, collection, db} from "../../firebase/firebase";

export const Goods = () => {
    const dispatch = useAppDispatch();

    const [user] = useAuthState(auth);
    const [goodsArr, loading] = useCollectionData(collection(db, 'Products'));

    useEffect(() => {
        dispatch(getGoodsTC());
    }, [dispatch]);

    const goods = useAppSelector(state => state.goods);

    const sendToCard = async (id: string) => {
        dispatch(
            addToCardAC(
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
                            sendToCard={sendToCard}
                        />
                    )
                })}
            </Grid>
        </Container>
    );
};

