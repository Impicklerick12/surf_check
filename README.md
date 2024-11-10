# Surf Check 🌊

A **React** application that fetches and displays wave data for various surf locations in Queensland, Australia, using the **Queensland Government's Open Data API**. Surf Check lets users view real-time wave statistics by location, and provides options for sorting, filtering, and pagination for a tailored experience.

---

## Features

- **Surf Location Selection**: Choose a specific surf location to view detailed wave data.
- **Real-Time Wave Stats**: Display critical metrics like wave height, sea surface temperature, direction, and peak period.
- **Data Sorting**: Sort data by date (newest to oldest) or location longitude for customized viewing.
- **Pagination**: Fetch data in manageable pages to reduce load time and enhance user experience.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **Git**

### Installation

1. Clone the repository:  
   `git clone https://github.com/Impicklerick12/surf_check.git`  
   `cd surf_check`

2. Install dependencies:  
   `npm install`

3. Start the application:  
   `npm start`

4. Access the application at [http://localhost:3000](http://localhost:3000).

---

## Usage

- **Choose a Location**: Select from a list of surf sites to view real-time wave stats.
- **Pagination**: Use the "Load More" button to fetch additional data pages.
- **Sorting**: View results sorted by date (newest first) or location longitude.

---

## Code Overview

### Key Components

- **`App.tsx`**: The main component, initializing data fetching and rendering the interface.
- **`WaveLocation.tsx`**: Displays wave stats for each selected location.
- **API Call**: `src/api/fetchWaveData.ts` handles requests to the Queensland Government's CKAN data API, with built-in pagination and sorting.

### API

This project uses the **Queensland Government Open Data API** to fetch surf-related data. The primary endpoint for data is:

> const resourceID = '2bbef99e-9974-49b9-a316-57402b00609c;`
>
> const url = https://data.qld.gov.au/api/3/action/datastore_search?resource_id=${resourceID}&limit=100&offset=${offset};`


Filtering and sorting are achieved through SQL-like queries appended to the request URL.

### Example Data Structure

Data fetched from the API includes the following fields:

> { 
>
>   "_id": 100, 
>
>   "Site": "Caloundra", 
>
>   "DateTime": "2024-10-26T02:00:00", 
>
>   "Latitude": "-26.84565", 
>
>   "Longitude": "153.15452", 
>
>   "Hsig": "0.722",
>
>   "Hmax": "1.170", 
>
>   "Tp": "10.530",
>
>   "SST": "23.80",
>
>   "Direction": "99.80" 
>
> }

---

## Future Enhancements

- **Filtering by Date Range**: Allow users to specify a date range.
- **Graph Visualization**: Chart wave data over time for easier trend analysis.
- **Notifications**: Set alerts for specific surf conditions.

---

## License

This project is licensed under the **MIT License**. See the LICENSE file for details.
