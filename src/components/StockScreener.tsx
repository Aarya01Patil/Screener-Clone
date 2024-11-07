import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StockTable from './StockTable';
import { Stock } from '../types/types';
import Papa from 'papaparse';
import '../styles.css';

const StockScreener: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);
    const [queryText, setQueryText] = useState('');
    const [showResults, setShowResults] = useState(false);

    const parameterMapping: { [key: string]: keyof Stock } = {
        'Market capitalization': 'Market Capitalization (B)',
        'P/E Ratio': 'P/E Ratio',
        'ROE (%)': 'ROE (%)',
        'Debt-to-Equity Ratio': 'Debt-to-Equity Ratio',
        'Dividend Yield (%)': 'Dividend Yield (%)',
        'Revenue Growth (%)': 'Revenue Growth (%)',
        'EPS Growth (%)': 'EPS Growth (%)',
        'Current Ratio': 'Current Ratio',
        'Gross Margin (%)': 'Gross Margin (%)'
    };

    useEffect(() => {
        fetch('/Sample_Stock_Dataset.csv')
            .then(response => response.text())
            .then(csvData => {
                const result = Papa.parse(csvData, {
                    header: true,
                    dynamicTyping: true,
                });
                setStocks(result.data as Stock[]);
            });
    }, []);

    const handleRunQuery = () => {
        if (!queryText.trim()) {
            setFilteredStocks(stocks);
            setShowResults(true);
            return;
        }

        const conditions = queryText.split('AND').map(condition => condition.trim());

        const filtered = stocks.filter(stock => {
            return conditions.every(condition => {
                const matches = condition.match(/(.*?)\s*([<>])\s*(\d+)/);
                if (!matches) return true;

                const [, parameter, operator, value] = matches;
                const trimmedParam = parameter.trim();
                const stockField = parameterMapping[trimmedParam];
                
                if (!stockField) return true;

                const stockValue = stock[stockField];
                const filterValue = Number(value);

                switch (operator) {
                    case '>':
                        return Number(stockValue) > filterValue;
                    case '<':
                        return Number(stockValue) < filterValue;
                    default:
                        return true;
                }
            });
        });

        setFilteredStocks(filtered);
        setShowResults(true);
    };

    return (
        <Box sx={{ width: '100%', p: 3 }}>
            {!showResults ? (
                <div className="query-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Typography className="query-title">
                        Create a Search Query
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="subtitle1" gutterBottom>
                                Query
                            </Typography>
                            <textarea
                                className="query-textarea"
                                value={queryText}
                                onChange={(e) => setQueryText(e.target.value)}
                                placeholder="Market capitalization > 50 AND&#10;P/E Ratio < 15 AND&#10;ROE (%) > 22"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Only companies with latest results"
                            />
                            <Button
                                variant="contained"
                                className="query-button"
                                onClick={handleRunQuery}
                                startIcon={<PlayArrowIcon />}
                            >
                                RUN THIS QUERY
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <div className="example-box">
                                <Typography className="example-title">
                                    Custom query example
                                </Typography>
                                <pre className="example-content">
                                    Market capitalization {'>'} 50 {'\n'}AND
                                    P/E Ratio {'<'} 15 AND{'\n'}
                                    ROE (%) {'>'} 22
                                </pre>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <div className="results-container">
                    <div className="results-header">
                        <Typography variant="h5">Query Results</Typography>
                        <div className="action-buttons">
                            <Button variant="outlined" onClick={() => setShowResults(false)}>
                                Edit Query
                            </Button>
                            <Button variant="contained" className="query-button">
                                Save This Query
                            </Button>
                        </div>
                    </div>
                    <StockTable stocks={filteredStocks} />
                </div>
            )}
        </Box>
    );
};

export default StockScreener; 