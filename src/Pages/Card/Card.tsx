import React from 'react';
import {Container} from "@mui/material";
import {CardTable} from "./CardTable/CardTable";
import {Navigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebase";


export const Card = () => {
    const [user] = useAuthState(auth);
    console.log(process.env)
    if (!user) {
        return <Navigate to={'/'}/>
    }

    return (
        <Container>
            <CardTable/>
        </Container>
    );
};

