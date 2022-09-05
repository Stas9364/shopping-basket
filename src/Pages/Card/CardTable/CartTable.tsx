import React from 'react';
import {Grid, Paper, Table, TableContainer} from "@mui/material";
import {CartTableHead} from "./TableHead";
import {CartTableBody} from "./TableBody";
import {CartTableFooter} from "./TableFooter";

export const CartTable = () => {
    return (
        <Grid container marginTop={5}>
            <TableContainer component={Paper} style={{backgroundColor: '#f0f8ff'}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <CartTableHead/>
                    <CartTableBody/>
                    <CartTableFooter/>
                </Table>
            </TableContainer>
        </Grid>
    );
};

