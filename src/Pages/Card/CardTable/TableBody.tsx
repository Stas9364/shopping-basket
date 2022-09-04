import React from 'react';
import {TableBody, TableCell, TableRow} from "@mui/material";
import {BasketCounter} from "../../../components";
import {useAppDispatch, useAppSelector} from "../../../utils";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {createData} from "../../../utils";
import {addQuantityAndPriceAC, deleteFromCardAC} from "../cardReducer";
import {selectProductTC} from "../../Goods/goodsReducer";
import {collection, db} from "../../../firebase/firebase";

export const CardTableBody = () => {
    const dispatch = useAppDispatch();
    const [goods, loading] = useCollectionData(collection(db, 'Products'));

    const order = useAppSelector(state => state.card);

    const product = order.map(el => createData(el.id, el.title, el.price, el.image, el.quantity));

    const deleteFromCard = (id: string) => {
        dispatch(deleteFromCardAC(id));
        dispatch(selectProductTC(id, false));
    };

    const onCounter = (num: number, id: string) => {
        let product;
        if (goods) {
            product = goods.find(p => p.id === id)
        }

        // @ts-ignore
        dispatch(addQuantityAndPriceAC(num, id, product.price));
    };

    let totalCount;
    if (product) {
        totalCount = product.reduce((gen, acc) => gen + acc.price, 0);
    }
    return (
        <TableBody>
            {product.map((p) => (
                <TableRow
                    style={p.quantity === 0 ? {opacity: '0.5'} : {opacity: '1'}}
                    key={p.id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                    <TableCell align="center" component="th" scope="row">
                        <img src={p.image} alt="img" style={{width: '100px', height: '100px'}}/>
                        <div
                            onClick={() => deleteFromCard(p.id)}
                            style={{cursor: 'pointer'}}
                        >delete
                        </div>
                    </TableCell><TableCell component="th" scope="row">
                    {p.title}
                </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                        <BasketCounter
                            id={p.id}
                            quantity={p.quantity}
                            onCounter={onCounter}
                        />
                    </TableCell>
                    <TableCell align="right">{p.price}</TableCell>
                </TableRow>
            ))}
            <TableRow>
                <TableCell rowSpan={2}/>
                <TableCell
                    align="right"
                    colSpan={5}
                >Total count:
                    <span style={{fontSize: '20px', fontWeight: 'bolder'}}>{totalCount}$</span>
                </TableCell>
            </TableRow>
        </TableBody>
    );
};

