import React from 'react';
import {TableCell, TableHead, TableRow} from "@mui/material";

export const CardTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell width={130}></TableCell>
                <TableCell width={250}>Product</TableCell>
                <TableCell align="center">Additional services</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Cost $</TableCell>
            </TableRow>
        </TableHead>
    );
};

