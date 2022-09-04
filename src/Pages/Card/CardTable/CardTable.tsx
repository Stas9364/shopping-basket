import React from 'react';
import {Grid, Paper, Table, TableContainer} from "@mui/material";
import {CardTableHead} from "./TableHead";
import {CardTableBody} from "./TableBody";
import {CardTableFooter} from "./TableFooter";

export const CardTable = () => {
    return (
        <Grid container marginTop={5}>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <CardTableHead/>
                    <CardTableBody/>
                    <CardTableFooter/>
                </Table>
            </TableContainer>
        </Grid>
    );
};

