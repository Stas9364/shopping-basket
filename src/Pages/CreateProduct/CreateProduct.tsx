import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useAppDispatch} from "../../utils";
import {createProductTC} from "../Goods/goodsReducer";
import {Button, Container, Grid, TextField} from "@mui/material";

const getRandomArbitrary = () => {
    return Math.round(Math.random() * (1500 - 50) + 50);
}

export const CreateProduct = () => {
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');

    const createProduct = () => {
        const product = {
            "id": uuidv4(),
            "title": title,
            "price": getRandomArbitrary(),
            "description": description,
            "isSelected": false,
            "image": img
        }
        dispatch(createProductTC(product));
        setTitle('');
        setDescription('');
        setImg('');
    };

    return (
        <Container maxWidth='xs' style={{marginTop: '10px'}}>
            <Grid container flexDirection="column"  width='300px'>
                <TextField
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    placeholder='Title'
                />
                <TextField
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    placeholder='Description'
                />
                <TextField
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.currentTarget.value)}
                    placeholder='Img'
                />
                <Button onClick={createProduct} fullWidth variant='contained'>Create</Button>
            </Grid>
        </Container>
    );
};

