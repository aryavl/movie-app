# Movie Application Site

Welcome to the Movie Application Site! This web application allows you to explore and discover information about various movies. Built using React.js and Tailwind CSS, it offers a responsive and interactive design for seamless user experience.

## Landing Page

The landing page features five sections:

1. **Our Genres**: Displays movies categorized by genres.
2. **Upcoming Movies**: Lists upcoming movies with release dates.
3. **Latest Movies**: Features the latest releases.
4. **Top-rated Movies**: Showcases top-rated movies with vote count and average.
5. **Popular Movies**: Highlights popular movies with popularity values.

### Navigation

The landing page includes a navigation bar with the following options:
- Logo
- Menu/Navigation (Upcoming, Latest, Popular, Top-rated)
- Search bar

### Search

Searching for a keyword hides the sections and displays search results as a responsive grid of movies. Clicking on any movie redirects to its details page.

### Pagination

The landing page provides pagination options at the bottom, including page numbers, total pages, current page number, and previous/next options for each section.

## Movie Details Page

The movie details page presents comprehensive information about a particular movie.

### Details

- **Language**
- **Title**
- **Overview**
- **Popularity**
- **Genres**
- **Release Date**
- **Origin Country**
- **Vote Count**
- **Vote Average**
- **Budget**
- **Revenue**
- **Link to Homepage**

### Reviews Section

Displays the top 5 reviews for the movie, including author details (name, avatar/image), content, and creation date.

### Similar Movies Section

Lists a few similar movies with titles, posters, and brief overviews.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling web applications.
- **The Movie Database (TMDb) API**: Fetches movie data, including details, reviews, and similar movies.

## Installation

To run this application locally, follow these steps:

1. Clone the repository: `git clone git@github.com:aryavl/movie-app.git`
2. Navigate to the project directory: `cd client`
3. Obtain an API key from TMDb by signing up at https://www.themoviedb.org/.
4. Create a `.env` file in the root directory of the project.
5. Add your TMDb API key to the `.env` file: `REACT_APP_TMDB_API_KEY=your_api_key`
6. Install dependencies: `npm install`
7. Start the development server: `npm start`



## Feedback

If you have any feedback or suggestions, please feel free to open an issue in the repository. Your input is highly appreciated!

