import React from 'react';
import {Button, TableCell, TableFooter, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {ModalOrderForm} from "../../../components/ModalOrderForm/ModalOrderForm";


export const CardTableFooter = () => {
    return (
        <TableFooter>
            <TableRow>
                <TableCell colSpan={4}>
                    <Button variant="outlined">
                        <Link
                            style={{textDecoration: 'none', color: '#1769aa'}}
                            to='/goods-page'>
                            <ArrowBackIcon
                                fontSize={'small'}
                                sx={{marginBottom: -0.5, marginRight: 1}}
                            />
                            Back to shopping
                        </Link>
                    </Button>
                </TableCell>
                <TableCell align="right">
                    <ModalOrderForm/>
                </TableCell>
            </TableRow>
        </TableFooter>
    );
};

