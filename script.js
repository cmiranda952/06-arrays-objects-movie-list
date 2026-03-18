// Arrays holding movie objects for each genre
// Each movie includes a title, release year, and short description
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A sarcastic antihero takes on a powerful villain." },
  { title: "Step Brothers", year: 2008, description: "Two grown men become reluctant stepbrothers." },
  { title: "Anchorman", year: 2004, description: "A famous news anchor faces a changing newsroom." },
  { title: "The Hangover", year: 2009, description: "Friends retrace a wild night in Las Vegas." }
];

const actionMovies = [
  { title: "Mad Max: Fury Road", year: 2015, description: "Survivors race through a dangerous desert chase." },
  { title: "John Wick", year: 2014, description: "A retired assassin returns for revenge." },
  { title: "Die Hard", year: 1988, description: "A cop battles criminals in a skyscraper." },
  { title: "The Dark Knight", year: 2008, description: "Batman faces chaos caused by the Joker." }
];

const dramaMovies = [
  { title: "The Shawshank Redemption", year: 1994, description: "A prisoner holds onto hope over many years." },
  { title: "Forrest Gump", year: 1994, description: "A kind man experiences major moments in history." },
  { title: "Fight Club", year: 1999, description: "An office worker meets a rebellious soap maker." },
  { title: "The Godfather", year: 1972, description: "A crime family struggles with power and loyalty." }
];

const sciFiMovies = [
  { title: "Inception", year: 2010, description: "A team enters dreams to plant an idea." },
  { title: "The Matrix", year: 1999, description: "A hacker discovers reality is a simulation." },
  { title: "Interstellar", year: 2014, description: "Explorers travel through space to save humanity." },
  { title: "Blade Runner 2049", year: 2017, description: "A detective uncovers a mystery in a future world." }
];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Build an HTML list using a for loop
  let movieItems = "";
  for (let i = 0; i < movieList.length; i++) {
    const movie = movieList[i];
    movieItems += `<li><strong>${movie.title}</strong> (${movie.year})<br>${movie.description}</li>`;
  }

  // Display the movies as a list on the page
  movieRecommendations.innerHTML = `<p>Enjoy:</p><ul>${movieItems}</ul>`;
});