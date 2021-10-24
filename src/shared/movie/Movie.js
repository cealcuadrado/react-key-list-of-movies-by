import './Movie.css';

function Movie(props) {
    return (
        <li>{props.title} ({props.year})</li>
    );
}

export default Movie;