import React, {Component} from 'react';
import Trailer from './Trailer';
import apiCalls from '../apiCalls';
import {checkResponse} from '../utilities';
import '../css/MovieView.css';

class MovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trailer: 'https://www.youtube.com/embed/',
            error: '',
            isLoading: ''
        }
    }

    componentDidMount = () => {
        apiCalls.getTrailerData(this.props.selectedMovie.id)
            .then(response => checkResponse(response))
            .then(data => this.setState(prevState => {
               if (!data.videos.length) {
                 return
               }
               const key = data.videos.find(video => video.type === 'Trailer').key
               return {trailer: `${prevState.trailer}${key}`}
                }))
            .catch((error) => this.setState({error: error.message}));
    }

    render = () => {
        const trailerContent = this.state.error ? <h2 className="error-message">{this.state.error}</h2> : <Trailer backdropImg={this.props.selectedMovie.backdrop_path} src={this.state.trailer}/>;
        return (
            <section className='movie-view'>
                {trailerContent}
                <div className='movie-details-container'>
                    <section className='movie-details'>
                        <img className="single-view-poster" src={this.props.selectedMovie.poster_path} alt="movie poster"/>
                        <div className='movie-info'>
                            <h2 className='single-view-title'>{this.props.selectedMovie.title}</h2>
                            <p>{this.props.selectedMovie.runtime}</p>
                            <p>Rating: {this.props.selectedMovie.average_rating} / 10</p>
                            {this.props.selectedMovie.release_date && <p>Release Date: {this.props.selectedMovie.release_date}</p>}
                            {this.props.selectedMovie.genre && <p>Genre: {this.props.selectedMovie.genre}</p>}
                            {this.props.selectedMovie.budget && <p>Budget: {this.props.selectedMovie.budget}</p>}
                            {this.props.selectedMovie.revenue && <p>Revenue: {this.props.selectedMovie.revenue}</p>}
                        </div>
                    </section>
                    <h3>Overview</h3>
                    {this.props.selectedMovie.overview && <p className='single-view-overview'>{this.props.selectedMovie.overview}</p>}
                </div>
            </section>
        );
    }
}

export default MovieView;
