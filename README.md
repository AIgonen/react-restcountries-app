# React countries app

This project is a React application that uses the [REST Countries API](https://restcountries.com/) to display information about countries around the world. It uses [Ant Design](https://ant.design/) for UI components and [React Router v6](https://reactrouter.com/) for navigation.

## Features

- Search for countries by name
- View paginated list of results
- Click on a country to see detailed information (flag, name, capital, population, area, languages, currencies)
- Responsive layout using Ant Design components

## Getting started

### Prerequisites

- Node.js v14+ and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-restcountries-app.git
   cd react-restcountries-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```
4. Open http://localhost:3000 in your browser.

## Project structure

```
react-restcountries-app/
├── README.md            # Project overview and setup instructions
├── package.json         # NPM configuration and scripts
└── src/                 # Source files
    ├── index.js         # Entry point
    ├── App.js           # Main app component with routing
    ├── App.css          # Global styles
    └── components/      # Reusable UI components
        ├── SearchBar.js
        ├── CountryList.js
        └── CountryDetail.js
```

## Technologies

- React
- React Router v6
- Ant Design
- Axios
- REST Countries API
