import React from "react";
import {Controller, useForm} from "react-hook-form";
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {theme, useAppSelector} from "../../utils";
import {ThemeProvider} from "@mui/material/styles";
import {cartSelector} from "../../Pages";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '35%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type TFormInput = {
    name: string
    email: string
    address: string
    phone: string
}

export const ModalOrderForm = () => {
    const card = useAppSelector(cartSelector);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {control, handleSubmit} = useForm<TFormInput>();

    const order = () => {
        return card.filter(p => p.quantity !== 0);
    };

    const onSubmit = (data: TFormInput) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(order()))
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Button variant="outlined" color={"primary"} onClick={handleOpen}>Place an order</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Order form
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name='name'
                                control={control}
                                defaultValue=""
                                render={({field}) =>
                                    <TextField {...field} label='Name' type={"text"} fullWidth variant="filled"/>}
                            />
                            <Controller
                                name='email'
                                control={control}
                                defaultValue=""
                                render={({field}) =>
                                    <TextField {...field} label='Email' type={"email"} fullWidth required
                                               variant="filled"/>}
                            />
                            <Controller
                                name='address'
                                control={control}
                                defaultValue=""
                                render={({field}) =>
                                    <TextField {...field} label='Address' type={"text"} fullWidth variant="filled"/>}
                            />
                            <Controller
                                name='phone'
                                control={control}
                                defaultValue=""
                                render={({field}) =>
                                    <TextField {...field} label='Phone' fullWidth required variant="filled"/>}
                            />
                            <Button type="submit" fullWidth variant="contained"
                                    style={{marginTop: '30px'}}>Confirm</Button>
                        </form>
                    </Box>
                </Modal>
            </ThemeProvider>
        </>
    );
};