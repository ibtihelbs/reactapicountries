

# Country Explorer

Country Explorer is a responsive, user-friendly web application that provides detailed information about countries around the world. It is powered by the [REST Countries API](https://restcountries.com), integrated with **React**, **TailwindCSS**, and **InfiniteScroll** for improved performance and seamless user experience. The recent updates significantly boosted performance, improving the Lighthouse score from **30% to 67%**.

## Features

- **All Countries Overview**: View all countries on the homepage, loaded dynamically using InfiniteScroll for performance optimization.
- **Search Functionality**: Search for countries by name with real-time filtering.
- **Region-based Filtering**: Filter countries by region for easier navigation.
- **Country Detail Page**: Click on any country to see detailed information, including population, region, languages, and more.
- **Border Navigation**: Navigate through neighboring countries directly from the detail page.
- **Dark Mode / Light Mode Toggle**: Easily switch between light and dark themes for an optimal user experience.

## Performance Improvements

- **Performance Boost**: Recent changes increased the Lighthouse performance score from **30% to 67%** by optimizing the API calls, adding InfiniteScroll for better data handling, and improving TailwindCSS usage for faster rendering.
- **Lazy Loading**: Implemented lazy loading for images and content to enhance load times.
- **Efficient Data Fetching**: Limited the initial data load, fetching countries progressively as users scroll, reducing unnecessary requests and improving response times.

## Technologies Used

- **React.js**: Provides a fast and scalable front-end architecture.
- **TailwindCSS**: Ensures a consistent and responsive UI with minimal CSS footprint.
- **InfiniteScroll**: Enhances performance by progressively loading content as users scroll.
- **REST Countries API**: Supplies up-to-date country data for a rich user experience.
- **Axios**: Manages API requests and data handling efficiently.

## How to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/ibtihelbs/reactapicountries.git
   ```

2. Navigate to the project directory:

   ```bash
   cd reactapicountries
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   ```
   http://localhost:3000
   ```

## Future Enhancements

- **Performance Optimization**: Further improvement to the Lighthouse score, aiming for 80%+.
- **Offline Mode**: Enable users to explore countries without an internet connection by caching API results.
- **Map Integration**: Add interactive maps for each country to enhance the user experience.

## Screenshots

### Desktop View
![Desktop View](./screenshot/desktop.png)

### Mobile View
![Mobile View](./screenshot/mobile.png)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or feature requests.


