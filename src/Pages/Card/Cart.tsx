import React from 'react';
import {Container} from "@mui/material";
import {CartTable} from "./CardTable/CartTable";
import {Navigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebase";


export const Cart = () => {
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to={'/'}/>
    }

    return (
        <Container>
            <CartTable/>
        </Container>
    );
};

