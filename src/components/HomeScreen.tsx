import React from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

interface ScreenCard {
    title: string;
    description: string;
    link: string;
}

const popularThemes: ScreenCard[] = [
    {
        title: "Low on 10 year average earnings",
        description: "Graham liked to value stocks based on average earnings",
        link: "#"
    },
    {
        title: "Capacity expansion",
        description: "Companies undergoing major capacity expansion",
        link: "#"
    },
    {
        title: "Debt reduction...",
        description: "Companies with expansion",
        link: "#"
    },
    {
        title: "Companies creating new high",
        description: "Companies with current price around 52 week high",
        link: "#"
    },
    {
        title: "Growth without dilution",
        description: "Companies with less than 10% dilution over last 5 years",
        link: "#"
    },
    {
        title: "FII Buying",
        description: "FII buying",
        link: "#"
    }
];

const popularFormulas: ScreenCard[] = [
    {
        title: "Piotroski Scan",
        description: "Companies with Piotroski score of 9 which ranks stocks on 9 parameters",
        link: "#"
    },
    {
        title: "Magic Formula",
        description: "Based on famous Magic Formula.",
        link: "#"
    },
    {
        title: "Coffee Can Portfolio",
        description: "Based on the book by Saurabh Mukherjee.",
        link: "#"
    }
];

const sectors = [
    "Alcoholic Beverages", "Auto Ancillaries", "Automobile", "Banks", "Bearings", "Cables",
    "Capital Goods - Electrical Equipment", "Capital Goods-Non Electrical Equipment",
    "Castings, Forgings & Fastners", "Cement", "Cement - Products", "Ceramic Products",
    "Chemicals", "Computer Education", "Construction", "Consumer Durables",
    "Credit Rating Agencies", "Crude Oil & Natural Gas", "Diamond, Gems and Jewellery",
    "Diversified", "Dry cells", "E-Commerce/App based Aggregator", "Edible Oil", "Education",
    "Electronics", "Engineering", "Entertainment", "ETF", "Ferro Alloys", "Fertilizers",
    "Finance", "Financial Services", "FMCG", "Gas Distribution", "Glass & Glass Products",
    "Healthcare", "Hotels & Restaurants", "Infrastructure Developers & Operators",
    "Infrastructure Investment Trusts", "Insurance", "IT - Hardware", "IT - Software",
    "Leather", "Logistics", "Marine Port & Services", "Media - Print/Television/Radio",
    "Mining & Mineral products", "Miscellaneous", "Non Ferrous Metals", "Oil Drill/Allied",
    "Online Media", "Packaging", "Paints/Varnish", "Paper", "Petrochemicals",
    "Pharmaceuticals", "Plantation & Plantation Products", "Plastic products",
    "Plywood Boards/Laminates", "Power Generation & Distribution", "Power Infrastructure",
    "Printing & Stationery", "Quick Service Restaurant", "Railways",
    "Readymade Garments/ Apparells", "Real Estate Investment Trusts", "Realty", "Refineries",
    "Refractories", "Retail", "Sanitaryware", "Ship Building", "Shipping", "Steel",
    "Stock/ Commodity Brokers", "Sugar", "Telecom-Handsets/Mobile",
    "Telecomm Equipment & Infra Services", "Telecomm-Service", "Textiles", "Tobacco Products",
    "Trading", "Tyres"
];

const HomeScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" component="h1">Stock screens</Typography>
                <Button
                    variant="contained"
                    className="create-screen-button"
                    onClick={() => navigate('/screen/new')}
                >
                    CREATE NEW SCREEN
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper className="theme-section" elevation={1}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Popular themes</Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                            Popular investing themes
                        </Typography>
                        <Grid container spacing={2}>
                            {popularThemes.map((theme, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Paper className="theme-card" elevation={0}>
                                        <Typography variant="h6">{theme.title}</Typography>
                                        <Typography color="text.secondary">{theme.description}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>

                    <Paper className="theme-section" elevation={1}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Popular formulas</Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                            Screening formulas based on books
                        </Typography>
                        <Grid container spacing={2}>
                            {popularFormulas.map((formula, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Paper className="theme-card" elevation={0}>
                                        <Typography variant="h6">{formula.title}</Typography>
                                        <Typography color="text.secondary">{formula.description}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper className="theme-section" elevation={1}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Browse sectors</Typography>
                        <Box className="sectors-container">
                            {sectors.map((sector, index) => (
                                <Button
                                    key={index}
                                    variant="outlined"
                                    className="sector-button"
                                    sx={{ mr: 1, mb: 1 }}
                                >
                                    {sector}
                                </Button>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Box className="footer">
                <Typography variant="body2" color="text.secondary">
                    Stock analysis and screening tool
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Mittal Analytics Private Ltd © 2009-2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Made with ❤️ in India.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Data provided by C-MOTS Internet Technologies Pvt Ltd
                </Typography>
                <a href="/terms-and-privacy" className="footer-link">Terms & Privacy.</a>
            </Box>
        </Box>
    );
};

export default HomeScreen; 