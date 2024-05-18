# Service Cards React Application

## Project Description

This project is a simple React application designed to create a section showcasing service cards. Each card represents a service with an icon, title, description, and a "View more" link. The application is responsive, adapting to different screen sizes for mobile, tablet, and desktop views. All icons are in SVG format, and an additional task includes creating an SVG sprite for optimized icon management.

## Features

- Responsive design for mobile, tablet, and desktop.
- Service cards with icons, titles, descriptions, and a "View more" link.
- SVG icons integrated using an SVG sprite.

## Additional Task

- Create an SVG sprite to manage icons efficiently.

## Project Structure

- `public/`: Contains the HTML file and static assets.
- `src/`: Contains the source code of the application.
  - `components/`: Contains reusable React components.
    - `Card/`: Component for individual service cards.
    - `CardsList/`: Component for the list of service cards.
    - `Icon/`: Component for rendering SVG icons.
  - `db/`: Contains JSON data for the service cards.
  - `assets/`: SVG sprite containing all icons.
  - `styles/`: Contains CSS files for styling.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.


## Installation and Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/service-cards-react-app.git
    cd service-cards-react-app
    ```
2. **Install dependencies:**

    ```sh
    npm install
    ```
3. **Start the development server:**

    ```sh
    npm start
    ```
    
    The application will be available at `http://localhost:3000`.

## Usage

- The application displays a list of service cards, each with an icon, title, description, and a "View more" link.
- The icons are displayed using an SVG sprite for better performance.
- The design is responsive and adjusts to different screen sizes.

## Styling

- CSS modules are used for styling components.
- The application uses a grid layout for the card list to ensure responsiveness.
- Media queries are used to adjust the layout for different screen sizes.
