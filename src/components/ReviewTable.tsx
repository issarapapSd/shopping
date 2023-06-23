import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function ReviewTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{ fontSize: '16px' }}>Review</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody >
                    <div className='left_item'>
                        <h3>Issarapap </h3>
                    </div>
                    <div className='left_item'>
                        <p>Great product! </p>
                    </div>


                    <hr style={{width:'97%'}}/>
                    <div className='left_item'>
                        <h3>AJP </h3>
                    </div>
                    <div className='left_item'>
                        <p>Amazing</p>
                    </div>



                </TableBody>
            </Table>
        </TableContainer>
    );
}
