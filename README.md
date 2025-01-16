# World Countries React App

This is a React application that displays information about countries from the REST Countries API. 
The app provides a search functionality, detailed country information, and pagination for better user experience.

## Features

- **Search Bar**: Search for countries by name.
- **Country List**: Displays a paginated list of countries.
- **Country Details**: View detailed information about a selected country, including:
  - Flag
  - Name
  - Capital
  - Population
  - Area
  - Languages
  - Currencies
- **Routing**: Each country has its own dedicated page for detailed information.
- **Responsive Design**: Built using Material-UI for a modern and responsive user interface.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/world-countries.git
   cd world-countries
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Building the App

To create a production build:
```bash
npm run build
```

## Technologies Used

- React
- Material-UI
- Axios
- React Router
- REST Countries API