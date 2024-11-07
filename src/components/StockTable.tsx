import React from 'react';
import { 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow,
    TablePagination,
    Button,
    ButtonGroup,
    Typography
} from '@mui/material';
import { Stock } from '../types/types';

interface StockTableProps {
    stocks: Stock[];
}

const StockTable: React.FC<StockTableProps> = ({ stocks }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const columns = [
        { id: 'Ticker', label: 'Name', minWidth: 170 },
        { id: 'Market Capitalization (B)', label: 'Market Cap (B)', minWidth: 100 },
        { id: 'P/E Ratio', label: 'P/E', minWidth: 100 },
        { id: 'ROE (%)', label: 'ROE %', minWidth: 100 },
        { id: 'Debt-to-Equity Ratio', label: 'D/E Ratio', minWidth: 100 },
        { id: 'Dividend Yield (%)', label: 'Div Yield %', minWidth: 100 },
        { id: 'Revenue Growth (%)', label: 'Rev Growth %', minWidth: 100 },
        { id: 'EPS Growth (%)', label: 'EPS Growth %', minWidth: 100 },
        { id: 'Current Ratio', label: 'Current Ratio', minWidth: 100 },
        { id: 'Gross Margin (%)', label: 'Gross Margin %', minWidth: 100 },
    ];

    return (
        <Paper sx={{ width: '90%', margin: '0 auto', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ButtonGroup variant="outlined" size="small">
                    <Button>INDUSTRY</Button>
                    <Button>EXPORT</Button>
                    <Button>EDIT COLUMNS</Button>
                </ButtonGroup>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {stocks.length} results found: Showing page {page + 1} of {Math.ceil(stocks.length / rowsPerPage)}
                </Typography>
            </div>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth, fontWeight: 'bold', backgroundColor: '#f5f5f5' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stocks
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((stock, index) => (
                                <TableRow hover key={index}>
                                    {columns.map((column) => (
                                        <TableCell key={column.id}>
                                            {stock[column.id as keyof Stock]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={stocks.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(_, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 10));
                    setPage(0);
                }}
            />
        </Paper>
    );
};

export default StockTable; 