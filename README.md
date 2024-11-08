# Stock Screening Tool

## Objective
This project is a web-based stock screening tool inspired by the "Create New Screen" feature on Screener.in. It allows users to filter and view stocks based on specific criteria, closely matching the design and interaction of Screener.in.

## Dataset
The tool uses a static dataset of 500 stocks, each containing the following parameters:
- **Market Capitalization** – Market cap in billions
- **P/E Ratio** – Price to earnings ratio
- **ROE** – Return on equity as a percentage
- **Debt-to-Equity Ratio** – Debt relative to shareholder equity
- **Dividend Yield** – Dividend yield as a percentage
- **Revenue Growth** – Revenue growth rate as a percentage
- **EPS Growth** – Earnings per share growth rate as a percentage
- **Current Ratio** – Measure of liquidity (assets/liabilities)
- **Gross Margin** – Gross margin as a percentage

## Features and Requirements

### User Interface and Input Fields
- The interface is designed to closely resemble Screener.in, allowing users to input filter criteria in a query-like format.
- Users can input conditions in a sequential format, such as:

  `Market Capitalization > 10000 AND ROE > 15 AND P/E Ratio < 20`

- Each filter parameter supports conditions like Greater than, Less than, or Equal to.
- Implements an AND-only logic: all specified conditions must be met for a stock to appear in the results.

### Screening Logic
- Filtering logic evaluates each stock according to the defined conditions and returns only those that meet all specified criteria.

### Display Results
- Screened stocks are displayed in a tabular format, with columns for each of the 9 parameters.
- Includes sorting functionality on each column, allowing users to sort by Market Capitalization, P/E Ratio, ROE, etc.
- Paginate results if more than 10 stocks are displayed.

## Tech Stack
- **React** with **TypeScript** and **Material-UI** for styling.
- The application is designed to be a single-page application focusing on the screener functionality.

## Styling and User Experience
- The design aims to replicate Screener.in's look and feel, focusing on simplicity, usability, and responsiveness.
- No login/logout functionality is implemented.

## Bonus Points
- **Responsive Design**: The interface is responsive and works smoothly on both desktop and mobile devices.
- **Deployment**: The project can be deployed to platforms like Vercel or Netlify.

## Setup Instructions

### Clone the Repository:
```bash
git clone https://github.com/Aarya01Patil/Screener-Clone
cd stock-screener
```

### Install Dependencies:
```bash
npm install
```

### Run the Application:
```bash
 npm start
```

## Live Demo

The live version of the Stock Screening Tool is available at: https://screenerclone.netlify.app

## Sample Queries

### Large Cap Growth Stocks:
Market capitalization > 100 AND <br>
ROE (%) > 15 AND <br>
P/E Ratio > 10

### Dividend Value Stocks:
Div Yield (%)> 2 AND <br>
P/E < 20 AND <br>
D/E Ratio < 1

### High Liquidity Stocks:
Current Ratio > 2 AND <br>
Gross Margin (%)> 40

## References
Screener.in's Create New Screen: Explore this feature to understand its functionality and UX design. The closer your tool can match Screener.in's design and experience, the better.

## Assumptions
The dataset is static and does not update in real-time.
The application focuses on replicating the UI/UX of Screener.in without additional features like user authentication.
