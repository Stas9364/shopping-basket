import React from 'react';
import {Button, TableCell, TableFooter, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {ModalOrderForm} from "../../../components/ModalOrderForm/ModalOrderForm";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../../utils";



export const CartTableFooter = () => {
    return (
        <TableFooter>
            <TableRow>
                <TableCell colSpan={4}>
                    <ThemeProvider theme={theme}>
                        <Button variant="outlined" color={"primary"}>
                            <Link
                                style={{textDecoration: 'none', color: '#005267'}}
                                to='/goods-page'>
                                <ArrowBackIcon
                                    fontSize={'small'}
                                    sx={{marginBottom: -0.5, marginRight: 1}}
                                />
                                Back to shopping
                            </Link>
                        </Button>
                    </ThemeProvider>
                </TableCell>
                <TableCell align="right">
                    <ModalOrderForm/>
                </TableCell>
            </TableRow>
        </TableFooter>
    );
};

