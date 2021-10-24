import Movie from '../shared/movie/Movie';
import './Layout.css';

function Layout() {
    const movies = [
        { id: 1, title: "Duel", year: 1971 },
        { id: 2, title: "The Sugarland Express", year: 1974 },
        { id: 3, title: "Jaws", year: 1975 },
        { id: 4, title: "Close Encounters of the Third Kind", year: 1977 },
        { id: 5, title: "1941", year: 1979}
    ];
    return (
      <div class="layout">
        <h3>Movies by Steven Spielberg</h3>
        <ul>
          {movies.map((movie) => (
            <Movie key={movie.id} title={movie.title} year={movie.year} />
          ))}
        </ul>
      </div>
    );
}

export default Layout;