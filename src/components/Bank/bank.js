import React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import "./bank.css"
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('01', 0, 0,0, 0),
    createData('02', 0, 0,0, 0),
    createData('03', 0, 0,0, 0),
    createData('04', 0, 0,0, 0),
    createData('05', 0, 0,0, 0),
];

const Bank =()=> {
    return (
        <div className='responsive'>
            <div className='yozuv'>
                <h3>Kredit miqdori:________________</h3>
                <h3 style={{marginLeft:75}}>Muddati:________________</h3>
                <h3 style={{marginLeft:125}}>Foizi:________________</h3>
            </div>
            <div>
                <TableContainer className='table1' component={Paper}>

                    <Table sx={{ minWidth: 400 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Oy raqami</StyledTableCell>
                                <StyledTableCell align="right">Kredit qarzining qoldig`i</StyledTableCell>
                                <StyledTableCell align="right">Foizlarni to`lash&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Asosiy to`lov&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Yakuniy to`lov&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </div>

        </div>
    );
}

export default Bank;