import { render } from '@testing-library/react';
import React, {Component} from 'react';
import '../css/MovieView.css';


class MovieView extends Component {
    constructor(props) {
        super(props);
    }

render() {
        return (
            <h1>Working!!!</h1>
        )
    }
}

export default MovieView;