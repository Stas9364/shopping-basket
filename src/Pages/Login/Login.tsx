import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {Navigate} from "react-router-dom";
import {Box, Button, Container, Grid} from "@mui/material";
import {auth, signInWithPopup} from "../../firebase/firebase";

export const Login = () => {
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const [user] = useAuthState(auth);

    if (user) {
        return <Navigate to={'/goods-page'}/>
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
            >

                <Grid container
                      alignItems="center"
                      direction="column"
                      style={{width: '400px', background: 'lightgray'}}
                >
                    <Box p={7}>
                        <Button
                            variant={"contained"}
                            color={"inherit"}
                            onClick={signInWithGoogle}
                        >Log in with Google
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};
